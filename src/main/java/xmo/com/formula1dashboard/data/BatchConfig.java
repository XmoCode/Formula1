package xmo.com.formula1dashboard.data;

import javax.sql.DataSource;
import xmo.com.formula1dashboard.model.RaceModel;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
@EnableBatchProcessing
public class BatchConfig {

    private final String[] FIELD_NAMES = new String[] { "resultId", "raceId", "raceName", "year", "date", "circuitId",
            "circuitRef", "circuitName", "location", "country", "lat", "lng", "alt", "driverId", "driverName",
            "nationality", "constructorId", "constructorName", "teamRaceId", "position", "positionOrder", "points",
            "laps", "time", "milliseconds", "status" };

    @Autowired
    public JobBuilderFactory jobBuilderFactory;

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Bean
    public FlatFileItemReader<RaceInput> reader() {
        return new FlatFileItemReaderBuilder<RaceInput>()
                .name("raceItemReader")
                .resource(new ClassPathResource("races.csv"))
                .delimited()
                .names(FIELD_NAMES)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<RaceInput>() {
                    {
                        setTargetType(RaceInput.class);
                    }
                }).build();
    }

    @Bean
    public RaceDataProcessor processor() {
        return new RaceDataProcessor();
    }

    @Bean
    public JdbcBatchItemWriter<RaceModel> writer(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<RaceModel>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO race_model (result_id, race_id, race_name, year, date, circuit_id, circuit_ref, circuit_name, location, country, lat, lng, alt, driver_id, driver_name, nationality, constructor_id, constructor_name, team_race_id, position, position_order, points, laps, time, milliseconds, constructor_ref, constructor_res_ref, status)"
                        + "VALUES (:resultId, :raceId, :raceName, :year, :date, :circuitId, :circuitRef, :circuitName, :location, :country, :lat, :lng, :alt, :driverId, :driverName, :nationality, :constructorId, :constructorName, :teamRaceId, :position, :positionOrder, :points, :laps, :time, :milliseconds, :constructorRef, :constructorResRef, :status)")
                .dataSource(dataSource)
                .build();
    }

    @Bean
    public Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
        return jobBuilderFactory
                .get("importUserJob")
                .incrementer(new RunIdIncrementer())
                .listener(listener)
                .flow(step1)
                .end()
                .build();
    }

    @Bean
    public Step step1(JdbcBatchItemWriter<RaceModel> writer) {
        return stepBuilderFactory.get("step1")
                .<RaceInput, RaceModel>chunk(10)
                .reader(reader())
                .processor(processor())
                .writer(writer)
                .build();
    }

}

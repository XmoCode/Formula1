package xmo.com.formula1dashboard.data;

import java.util.HashMap;
import java.util.Map;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import xmo.com.formula1dashboard.model.Team;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    private final EntityManager em;

    @Autowired
    public JobCompletionNotificationListener(EntityManager em) {
        this.em = em;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        if (jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! JOB FINISHED! Time to verify the results");

            Map<Integer, Team> teamData = new HashMap<>();

            em.createQuery("SELECT distinct r.constructorId FROM RaceModel r", Integer.class)
                    .getResultList()
                    .stream()
                    .map(obj -> new Team(obj, ""))
                    .forEach(team -> teamData.put(team.getConstructorId(), team));

            em.createQuery("SELECT distinct r.teamRaceId FROM RaceModel r", String.class)
                    .getResultList()
                    .stream()
                    .map(str -> {
                        String strId = str.replaceAll("R", "").replaceAll("^[0-9]+", "").replaceAll("C", "");
                        return strId;
                    })
                    .forEach(strId -> {
                        Integer id = Integer.parseInt(strId);
                        Team teamObj = teamData.get(id);
                        teamObj.setTotalRaces(teamObj.getTotalRaces() + 1);
                    });

            em.createQuery("SELECT distinct r.constructorRef FROM RaceModel r", String.class)
                    .getResultList()
                    .stream()
                    .map(str -> {
                        String cName = str.replaceAll("^[0-9]+", "");
                        String cId = str.replaceAll(cName, "");
                        return new String[] { cId, cName };
                    })
                    .forEach(arr -> {
                        Integer id = Integer.parseInt(arr[0]);
                        Team teamObj = teamData.get(id);
                        teamObj.setConstructorName(arr[1]);
                    });

            em.createQuery("SELECT r.constructorResRef FROM RaceModel r", String.class)
                    .getResultList()
                    .stream()
                    .map(str -> {
                        String cRes = str.replaceAll("^[0-9]+", "");
                        String cId = str.replace(cRes, "");
                        return new String[] { cId, cRes };

                    })
                    .forEach(arr -> {
                        Integer id = Integer.parseInt(arr[0]);
                        String res = arr[1].replaceAll("^[P]", "");
                        Team teamObj = teamData.get(id);

                        if (res.equals("1"))
                            teamObj.setTotalGold(teamObj.getTotalGold() + 1);

                        if (res.equals("2"))
                            teamObj.setTotalSilver(teamObj.getTotalSilver() + 1);

                        if (res.equals("3"))
                            teamObj.setTotalBronze(teamObj.getTotalBronze() + 1);

                    });

            teamData.values().forEach(team -> em.persist(team));

        }
    }
}

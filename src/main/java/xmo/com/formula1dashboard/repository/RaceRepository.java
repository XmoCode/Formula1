package xmo.com.formula1dashboard.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import xmo.com.formula1dashboard.model.RaceModel;

public interface RaceRepository extends CrudRepository<RaceModel, Integer> {

    List<RaceModel> getByConstructorNameOrderByDateDesc(String teamName);

    default Map<Integer, List<RaceModel>> findLatestRacesByTeam(String teamName) {

        List<Integer> reg = new ArrayList<>();
        Map<Integer, List<RaceModel>> map = new HashMap<>();

        getByConstructorNameOrderByDateDesc(teamName)
                .stream()
                .forEach(obj -> {

                    int raceId = obj.getRaceId();

                    if (!reg.contains(raceId) && reg.size() <= 4)
                        reg.add(raceId);

                    if (reg.contains(raceId) && !map.containsKey(reg.indexOf(raceId))) {
                        int keyOfMap = reg.indexOf(raceId);
                        List<RaceModel> raceRecords = new ArrayList<>();
                        raceRecords.add((RaceModel) obj);

                        map.put(keyOfMap, raceRecords);
                    }

                else if (reg.contains(raceId) && map.containsKey(reg.indexOf(raceId))) {
                        int index = reg.indexOf(raceId);
                        map.get(index).add(obj);
                    }

                });

        return map;
    }

    default List<String> findTeamActiveYears(String teamName) {

        List<String> years = new ArrayList<>();
        getByConstructorNameOrderByDateDesc(teamName)
                .stream()
                .forEach(obj -> {
                    if (!years.contains(obj.getYear()))
                        years.add(obj.getYear());

                });

        return years;
    }

    @Query("SELECT r from RaceModel r WHERE (r.constructorName = :teamName) and r.date between :dateStart and :dateEnd order by r.date desc")
    List<RaceModel> getRacesByTeamBetweenDates(
            @Param("teamName") String teamName,
            @Param("dateStart") LocalDate startDate,
            @Param("dateEnd") LocalDate endDate);

    default Map<Integer, List<RaceModel>> getMapOfRaces(String teamName, LocalDate startDate, LocalDate endDate) {
        List<Integer> reg = new ArrayList<>(); // index of item (raceId) becomes map's key to enforce order
        Map<Integer, List<RaceModel>> map = new HashMap<>();
        List<RaceModel> list = getRacesByTeamBetweenDates(teamName, startDate, endDate);

        list.stream()
                .forEach(obj -> {
                    int raceId = obj.getRaceId();
                    if (reg.contains(raceId)) {
                        int index = reg.indexOf(raceId);
                        map.get(index).add(obj);

                    } else {
                        reg.add(raceId);
                        int keyOfMap = reg.indexOf(raceId);

                        List<RaceModel> raceRecords = new ArrayList<>();
                        raceRecords.add((RaceModel) obj);

                        map.put(keyOfMap, raceRecords);
                    }

                });

        return map;

    }

    Iterable<RaceModel> getByRaceIdOrderByPositionOrderAsc(int raceId);

}

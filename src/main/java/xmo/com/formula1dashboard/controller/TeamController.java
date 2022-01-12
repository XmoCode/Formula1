package xmo.com.formula1dashboard.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import xmo.com.formula1dashboard.model.RaceModel;
import xmo.com.formula1dashboard.model.Team;
import xmo.com.formula1dashboard.repository.RaceRepository;
import xmo.com.formula1dashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

    private TeamRepository teamRepository;
    private RaceRepository raceRepository;

    public TeamController(TeamRepository teamRepository, RaceRepository raceRepository) {
        this.teamRepository = teamRepository;
        this.raceRepository = raceRepository;
    }

    @GetMapping("/team")
    public Iterable<Team> getAllTeams() {
        return this.teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {

        Team team = this.teamRepository.findByConstructorName(teamName);

        // re transient fields of Team
        team.setRaces(raceRepository.findLatestRacesByTeam(teamName));
        team.setActiveYears(raceRepository.findTeamActiveYears(teamName));

        return team;
    }

    @GetMapping("/team/{teamName}/races")
    public Map<Integer, List<RaceModel>> getRacesForTeam(@PathVariable String teamName, @RequestParam int year) {

        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return this.raceRepository.getMapOfRaces(teamName, startDate, endDate);
    }

    @GetMapping("/race/{raceId}")
    public Iterable<RaceModel> getRaceResults(@PathVariable int raceId) {

        return this.raceRepository.getByRaceIdOrderByPositionOrderAsc(raceId);
    }

}

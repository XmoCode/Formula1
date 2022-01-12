package xmo.com.formula1dashboard.repository;

import org.springframework.data.repository.CrudRepository;

import xmo.com.formula1dashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Integer> {

    Team findByConstructorName(String teamName);

}

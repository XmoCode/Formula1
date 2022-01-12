package xmo.com.formula1dashboard.data;

import java.time.LocalDate;
import org.springframework.batch.item.ItemProcessor;
import xmo.com.formula1dashboard.model.RaceModel;

public class RaceDataProcessor implements ItemProcessor<RaceInput, RaceModel> {

  @Override
  public RaceModel process(final RaceInput raceInput) throws Exception {

    RaceModel raceModel = new RaceModel();

    raceModel.setResultId(Integer.parseInt(raceInput.getResultId()));
    raceModel.setRaceId(Integer.parseInt(raceInput.getRaceId()));
    raceModel.setRaceName(raceInput.getRaceName());
    raceModel.setYear(raceInput.getYear());
    raceModel.setDate(LocalDate.parse(raceInput.getDate()));
    raceModel.setCircuitId(Integer.parseInt(raceInput.getCircuitId()));
    raceModel.setCircuitRef(raceInput.getCircuitRef());
    raceModel.setCircuitName(raceInput.getCircuitName());
    raceModel.setLocation(raceInput.getLocation());
    raceModel.setCountry(raceInput.getCountry());
    raceModel.setLat(raceInput.getAlt());
    raceModel.setLng(raceInput.getLng());
    raceModel.setAlt(raceInput.getAlt());
    raceModel.setDriverId(Integer.parseInt(raceInput.getDriverId()));
    raceModel.setDriverName(raceInput.getDriverName());
    raceModel.setNationality(raceInput.getNationality());
    raceModel.setConstructorId(Integer.parseInt(raceInput.getConstructorId()));
    raceModel.setConstructorName(raceInput.getConstructorName());
    raceModel.setTeamRaceId(raceInput.getTeamRaceId());
    raceModel.setPosition(raceInput.getPosition());
    raceModel.setPositionOrder(Integer.parseInt(raceInput.getPositionOrder()));
    raceModel.setPoints(Float.parseFloat(raceInput.getPoints()));
    raceModel.setLaps(Integer.parseInt(raceInput.getLaps()));
    raceModel.setTime(raceInput.getTime());
    raceModel.setMilliseconds(raceInput.getMilliseconds());
    raceModel.setConstructorRef(raceInput.getConstructorId() + raceInput.getConstructorName());
    raceModel.setConstructorResRef(raceInput.getConstructorId() + "P" + raceInput.getPosition());
    raceModel.setStatus(raceInput.getStatus());

    return raceModel;

  }

}

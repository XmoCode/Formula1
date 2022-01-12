package xmo.com.formula1dashboard.model;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class RaceModel {

    @Id
    private int resultId;
    private int raceId;
    private String raceName;
    private String year;
    private LocalDate date;
    private int circuitId;
    private String circuitRef;
    private String circuitName;
    private String location;
    private String country;
    private String lat;
    private String lng;
    private String alt;
    private int driverId;
    private String driverName;
    private String nationality;
    private int constructorId;
    private String constructorName;
    private String teamRaceId;
    private String position;
    private int positionOrder;
    private float points;
    private int laps;
    private String time;
    private String milliseconds;
    private String constructorRef;
    private String constructorResRef;
    private String status;

    public String getConstructorResRef() {
        return constructorResRef;
    }

    public void setConstructorResRef(String constructorResRef) {
        this.constructorResRef = constructorResRef;
    }

    public int getResultId() {
        return resultId;
    }

    public void setResultId(int resultId) {
        this.resultId = resultId;
    }

    public int getRaceId() {
        return raceId;
    }

    public void setRaceId(int raceId) {
        this.raceId = raceId;
    }

    public String getRaceName() {
        return raceName;
    }

    public void setRaceName(String raceName) {
        this.raceName = raceName;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getCircuitId() {
        return circuitId;
    }

    public void setCircuitId(int circuitId) {
        this.circuitId = circuitId;
    }

    public String getCircuitRef() {
        return circuitRef;
    }

    public void setCircuitRef(String circuitRef) {
        this.circuitRef = circuitRef;
    }

    public String getCircuitName() {
        return circuitName;
    }

    public void setCircuitName(String circuitName) {
        this.circuitName = circuitName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }

    public int getDriverId() {
        return driverId;
    }

    public void setDriverId(int driverId) {
        this.driverId = driverId;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public int getConstructorId() {
        return constructorId;
    }

    public void setConstructorId(int constructorId) {
        this.constructorId = constructorId;
    }

    public String getConstructorName() {
        return constructorName;
    }

    public void setConstructorName(String constructorName) {
        this.constructorName = constructorName;
    }

    public String getTeamRaceId() {
        return teamRaceId;
    }

    public void setTeamRaceId(String teamRaceId) {
        this.teamRaceId = teamRaceId;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getPositionOrder() {
        return positionOrder;
    }

    public void setPositionOrder(int positionOrder) {
        this.positionOrder = positionOrder;
    }

    public float getPoints() {
        return points;
    }

    public void setPoints(float points) {
        this.points = points;
    }

    public int getLaps() {
        return laps;
    }

    public void setLaps(int laps) {
        this.laps = laps;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getMilliseconds() {
        return milliseconds;
    }

    public void setMilliseconds(String milliseconds) {
        this.milliseconds = milliseconds;
    }

    public String getConstructorRef() {
        return constructorRef;
    }

    public void setConstructorRef(String constructorRef) {
        this.constructorRef = constructorRef;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}

package xmo.com.formula1dashboard.model;

import java.util.List;
import java.util.Map;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Team {

    @Id
    private int constructorId;
    private String constructorName;
    private long totalRaces;
    private long totalGold;
    private long totalSilver;
    private long totalBronze;

    @Transient
    private Map<Integer, List<RaceModel>> races;

    @Transient
    private List<String> activeYears;

    public Team(int constructorId, String constructorName) {
        this.constructorId = constructorId;
        this.constructorName = constructorName;
        this.totalGold = 0;
        this.totalSilver = 0;
        this.totalBronze = 0;

    }

    @Override
    public String toString() {
        return "Team [constructorId=" + constructorId + ", constructorName=" + constructorName + ", totalBronze="
                + totalBronze + ", totalGold=" + totalGold + ", totalRaces=" + totalRaces + ", totalSilver="
                + totalSilver + "]";
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

    public long getTotalRaces() {
        return totalRaces;
    }

    public void setTotalRaces(long totalRaces) {
        this.totalRaces = totalRaces;
    }

    public long getTotalGold() {
        return totalGold;
    }

    public void setTotalGold(long totalGold) {
        this.totalGold = totalGold;
    }

    public long getTotalSilver() {
        return totalSilver;
    }

    public void setTotalSilver(long totalSilver) {
        this.totalSilver = totalSilver;
    }

    public long getTotalBronze() {
        return totalBronze;
    }

    public void setTotalBronze(long totalBronze) {
        this.totalBronze = totalBronze;
    }

    public Map<Integer, List<RaceModel>> getRaces() {
        return races;
    }

    public void setRaces(Map<Integer, List<RaceModel>> races) {
        this.races = races;
    }

    public Team() {
    }

    public List<String> getActiveYears() {
        return activeYears;
    }

    public void setActiveYears(List<String> activeYears) {
        this.activeYears = activeYears;
    }

}

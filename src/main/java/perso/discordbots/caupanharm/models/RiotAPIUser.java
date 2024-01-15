package perso.discordbots.caupanharm.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import perso.discordbots.caupanharm.SpringBot;

@JsonPropertyOrder({"puuid","gameName","tagLine"})
public class RiotAPIUser {
    private String puuid;
    private String gameName;
    private String tagLine;

    @JsonProperty("puuid")
    public String getPuuid() {
        return puuid;
    }

    @JsonProperty("puuid")
    public void setPuuid(String puuid) {
        this.puuid = puuid;
    }

    @JsonProperty("gameName")
    public String getGameName() {
        return gameName;
    }

    @JsonProperty("gameName")
    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    @JsonProperty("tagLine")
    public String getTagLine() {
        return tagLine;
    }

    @JsonProperty("tagLine")
    public void setTagLine(String tagLine) {
        this.tagLine = tagLine;
    }

    public String getFullName(){
        return gameName+"#"+tagLine;
    }

    @Override
    public String toString() {
        return "RiotUser{" +
                "puuid='" + puuid + '\'' +
                ", gameName='" + gameName + '\'' +
                ", tagLine='" + tagLine + '\'' +
                '}';
    }
}

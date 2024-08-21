import React, { FC } from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import { V1LifetimeMatchItem } from "../../interfaces/HenrikInterfaces";
import ShotsSummary from "./ShotsSummary";
import GaugeChartComponent from "./GaugeChartComponent";
import {Box} from "@mui/material";
import { GaugeChartComponentProps } from "../../interfaces/Interfaces";

const MatchSummary: FC<{ data: V1LifetimeMatchItem }> = ({ data }) => {
  /* Stats à afficher :
  Depuis les données basiques :
    ADR
    ACS
    DD
    Répartition des zones de tir

  Depuis les données complètes : 
    KAST
    Util
  */

  const combatScoreData: GaugeChartComponentProps = {
    arcsLength: [0.33, 0.33, 0.33],
    colors: ["#FF0000","#FFFF00","#00FF00"],
    values: {
      value: Math.round(data.stats.score / (data.teams.blue! + data.teams.red!)),
      minValue: 0,
      maxValue: 300
    }
  }

  const damageScoreData: GaugeChartComponentProps = {
    arcsLength: [0.25, 0.25, 0.5],
    colors: ["#FF0000","#FFFF00","#00FF00"],
    values: {
      value: Math.round(data.stats.damage.made / (data.teams.blue! + data.teams.red!)),
      minValue: 0,
      maxValue: 300
    }
    
  }

  const damageDeltaData: GaugeChartComponentProps = {
    nrOfLevels: 2,
    colors: ["#FF0000","#00FF00"],
    values: {
      value: Math.round((data.stats.damage.made - data.stats.damage.received) / (data.teams.blue! + data.teams.red!)),
      minValue: -150,
      maxValue: 150
    }
  }

  const totalShots = Object.values(data.stats.shots).reduce((sum, value) => sum + value, 0);
  const shotsRepartitionData: GaugeChartComponentProps = {
    arcsLength: [data.stats.shots.leg/totalShots, data.stats.shots.body/totalShots, data.stats.shots.head/totalShots],
    colors: ["#FFFF00","#00FF00", "#0000FF"],
    hideNeedle: true
  }

  return (
    <Grid container>
      <Grid container item xs={6} justifyItems="center">
        <Grid container item xs={4} justifyContent="center">
        <Avatar alt={data.stats.character.name} variant="square" sx={{width: 64, height: 64}} src={`src/assets/images/agents/${data.stats.character.name}_icon.jpg`}/>
        </Grid>
        <Grid container item xs={8}>
              <Grid item xs={4} direction="column"><Typography>Eliminations</Typography><Typography>{data.stats.kills}</Typography></Grid>
              <Grid item xs={4} direction="column"><Typography>Morts</Typography><Typography>{data.stats.deaths}</Typography></Grid>
              <Grid item xs={4} direction="column"><Typography>Assistances</Typography><Typography>{data.stats.assists}</Typography></Grid>
          </Grid>
          <Grid item xs={12} container alignItems="center" justifyContent="center">
        <ShotsSummary shots={data.stats.shots} />
      </Grid>
      </Grid>

      <Grid container item xs={6}>
        <Grid container item xs={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>Score de combat moyen (ACS)</Typography>
          <Typography>{combatScoreData.values ? combatScoreData.values.value : "Indisponible"}</Typography>
          <GaugeChartComponent {...combatScoreData}/>
          </Box>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>Dégâts par round (D/R)</Typography>
          <Typography>{damageScoreData.values? damageScoreData.values.value : "Indisponible"}</Typography>
          <GaugeChartComponent {...damageScoreData}/>
          </Box>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>Différence de dégâts (DΔ)</Typography>
          <Typography>{damageDeltaData.values? damageDeltaData.values.value : "Indisponible"}</Typography>
          <GaugeChartComponent {...damageDeltaData}/>
          </Box>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>Répartition des tirs</Typography>
          <GaugeChartComponent {...shotsRepartitionData}/>
          </Box>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>Implication (KAST)</Typography>
          <Typography>Indisponible</Typography>
          <GaugeChartComponent/>
          </Box>
        </Grid>
        <Grid container item xs={6} justifyContent="center" alignItems="center">
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography>Utilisation des compétences</Typography>
          <Typography>Indisponible</Typography>
          <GaugeChartComponent/>
          </Box>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default MatchSummary;

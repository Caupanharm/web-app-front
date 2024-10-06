import React, { FC } from "react";
import { Box, Typography, Avatar, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2'
import ShotsSummary from "./ShotsSummary";
import GaugeChartComponent from "./GaugeChartComponent";
import { GaugeChartComponentProps, MatchSummaryProps } from "../../../../interfaces/ComponentsInterfaces";

const MatchSummary: FC<MatchSummaryProps> = ({ data }) => {
  const theme = useTheme()

  const combatScoreData: GaugeChartComponentProps = {
    id: "combat-score",
    arcsLength: [0.33, 0.33, 0.33],
    colors: ["#FF0000", "#FFFF00", "#00FF00"],
    values: {
      value: data.formattedStats.acs,
      minValue: 0,
      maxValue: 300
    }
  }

  const damageScoreData: GaugeChartComponentProps = {
    id: "damage-score",
    arcsLength: [0.25, 0.25, 0.5],
    colors: ["#FF0000", "#FFFF00", "#00FF00"],
    values: {
      value: data.formattedStats.adr,
      minValue: 0,
      maxValue: 300
    }

  }

  const damageDeltaData: GaugeChartComponentProps = {
    id: "damage-delta",
    nrOfLevels: 2,
    arcsLength: [0.5, 0.5],
    colors: ["#FF0000", "#00FF00"],
    values: {
      value: data.formattedStats.dd,
      minValue: -150,
      maxValue: 150
    }
  }

  const shotsRepartitionData: GaugeChartComponentProps = {
    id: "shots-repartition",
    arcsLength: [data.formattedStats.lsp, data.formattedStats.bsp, data.formattedStats.hsp],
    colors: ["#FF0000", "#FFFF00", "#00FF00"],
    hideNeedle: true
  }

  console.log(data)


  return (
    <Grid container>
      <Grid container size={6}>
        <Grid container size={12}>
          <Grid size={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center"><Typography>Eliminations</Typography><Typography>{data.stats.kills}</Typography></Grid>
          <Grid size={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center"><Typography>Morts</Typography><Typography>{data.stats.deaths}</Typography></Grid>
          <Grid size={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center"><Typography>Assistances</Typography><Typography>{data.stats.assists}</Typography></Grid>
        </Grid>
        <Grid size={12} container alignItems="center" justifyContent="center">
          <ShotsSummary data={data} />
        </Grid>
      </Grid>

      <Grid container size={6}>
        <Grid container size={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography>Score de combat moyen (CSx̄)</Typography>
            <Typography>{combatScoreData.values ? combatScoreData.values.value : "Indisponible"}</Typography>
            <GaugeChartComponent {...combatScoreData} />
          </Box>
        </Grid>
        <Grid container size={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography>Dégâts par round (Dx̄)</Typography>
            <Typography>{damageScoreData.values ? damageScoreData.values.value : "Indisponible"}</Typography>
            <GaugeChartComponent {...damageScoreData} />
          </Box>
        </Grid>
        <Grid container size={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography>Différence de dégâts (DΔ)</Typography>
            <Typography>{damageDeltaData.values ? damageDeltaData.values.value : "Indisponible"}</Typography>
            <GaugeChartComponent {...damageDeltaData} />
          </Box>
        </Grid>
        <Grid container size={6} justifyContent="center" alignItems="center" marginBottom={4}>
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography>Répartition des tirs</Typography>
            <GaugeChartComponent {...shotsRepartitionData} />
          </Box>
        </Grid>
        <Grid container size={6} justifyContent="center" alignItems="center">
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography>Implication (KAST)</Typography>
            <Typography>Indisponible</Typography>
            <GaugeChartComponent />
          </Box>
        </Grid>
        <Grid container size={6} justifyContent="center" alignItems="center">
          <Box width={"100%"} height={"100%"} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography>Utilisation des compétences</Typography>
            <Typography>Indisponible</Typography>
            <GaugeChartComponent />
          </Box>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default MatchSummary;

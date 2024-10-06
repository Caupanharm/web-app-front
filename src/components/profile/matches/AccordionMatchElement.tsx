import React, { FC } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Grid from '@mui/material/Grid2'
import { AccordionMatchElementProps } from "../../../interfaces/ComponentsInterfaces";
import MatchSummary from "./match/MatchSummary";
import { CaupanharmMatchLight } from "../../../interfaces/data/CaupanharmMatchLight";
import { Typography, useTheme } from "@mui/material";

const AccordionMatchElement: FC<AccordionMatchElementProps> = ({
  id,
  className,
  data,
  expanded,
  onChange,
}) => {
  const theme = useTheme()

  return (
    <MuiAccordion
      key={id}
      className={className}
      expanded={expanded === `panel${id}`}
      onChange={onChange(`panel${id}`)}
      square={false}
    >
      <MuiAccordionSummary
        aria-controls={`panel${id}d-content`}
        id={`panel${id}d-header`}
        expandIcon={<img
          src={`src/assets/images/agents/${data.stats.agent}_icon.jpg`}
          alt={`${data.stats.agent}'s icon`}
          style={{ width: "64px", height: "64px", marginRight: "16px" }}
        />}
        sx={{
          background: `linear-gradient(to right, ${data.formattedStats.gameIssue === "win"
            ? theme.palette.green.dark
            : data.formattedStats.gameIssue === "lose"
              ? theme.palette.red.dark
              : data.formattedStats.gameIssue === "draw"
                ? theme.palette.secondary.dark
                : theme.palette.background.paper}33 10%, ${theme.palette.background.paper} 50%)`
        }}
      >
        {formatSummary(data)}
      </MuiAccordionSummary>
      <MuiAccordionDetails>
        <MatchSummary data={data} />
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};

function formatSummary(data: CaupanharmMatchLight) {
  const dateItems = data.metadata.startTime.split("T")[0].split("-"); // YYYY-MM-DDTHH:mm:ss.sssZ --> [YYYY,MM,DD]
  const formattedDate = dateItems[2] + "/" + dateItems[1];

  const resultMap = {
    "win": "Victoire",
    "lose": "Défaite",
    "draw": "Egalité"
  }

  return <Grid container width="100%" columns={9}>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>{formattedDate}</Typography>
      <Typography>{data.metadata.cluster}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>{data.metadata.map}</Typography>
      <Typography>{data.stats.agent}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>{resultMap[data.formattedStats.gameIssue] ?? ""}</Typography>
      <Typography>{`${data.stats.allyScore}-${data.stats.enemyScore}`}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>K/D/A</Typography>
      <Typography>{data.formattedStats.kda}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>K/D</Typography>
      <Typography>{data.formattedStats.kd}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>DΔ</Typography>
      <Typography>{data.formattedStats.dd}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>HS%</Typography>
      <Typography>{data.formattedStats.hsp}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>Dx̄</Typography>
      <Typography>{data.formattedStats.adr}</Typography>
    </Grid>
    <Grid size={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography>CSx̄</Typography>
      <Typography>{data.formattedStats.acs}</Typography>
    </Grid>
  </Grid>


}

export default AccordionMatchElement;

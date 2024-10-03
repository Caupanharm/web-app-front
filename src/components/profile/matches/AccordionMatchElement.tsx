import React, { FC } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Grid from '@mui/material/Grid2'
import { AccordionMatchElementProps } from "../../../interfaces/ComponentsInterfaces";
import { V1LifetimeMatchItem } from "../../../interfaces/HenrikInterfaces";
import MatchSummary from "./match/MatchSummary";

const AccordionMatchElement: FC<AccordionMatchElementProps> = ({
  id,
  className,
  data,
  expanded,
  onChange,
}) => {
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
        expandIcon={<ArrowForwardIosSharpIcon />}
        sx={{
          /*backgroundImage: `url(src/assets/images/maps/Loading_Screen_${data.meta.map.name}.jpg)`,*/
          backgroundSize: "cover",
          backgroundPosition: "center",
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

function formatSummary(data: V1LifetimeMatchItem) {
  const dateItems = data.meta.started_at.split("T")[0].split("-"); // YYYY-MM-DDTHH:mm:ss.sssZ --> [YYYY,MM,DD]
  const formattedDate = dateItems[2] + "/" + dateItems[1];

  let allyScore: number, enemyScore: number;
  let formattedResult: string = "";
  let formattedScore: string = "";

  if (data.teams.red != undefined && data.teams.blue != undefined) {
    if (data.stats.team.toLowerCase() === "red") {
      allyScore = data.teams.red;
      enemyScore = data.teams.blue;
    } else {
      allyScore = data.teams.blue;
      enemyScore = data.teams.red;
    }

    if (allyScore == enemyScore) {
      formattedResult = "Egalité"
      formattedScore = `${allyScore}-${enemyScore}`
    } else if (allyScore > enemyScore) {
      formattedResult = "Victoire"
      formattedScore = `${allyScore}-${enemyScore}`
    } else {
      formattedResult = "Défaite"
      formattedScore = `${allyScore}-${enemyScore}`
    }
  }

  return <Grid container width="100%">
    <Grid size={0.5} sx={{ textAlign: "left" }}>{formattedDate}</Grid>
    <Grid size={0.75} sx={{ textAlign: "left" }}>{data.meta.map.name}</Grid>
    <Grid size={0.6} sx={{ textAlign: "left" }}>{formattedResult}</Grid>
    <Grid size={1} sx={{ textAlign: "left" }}>{formattedScore}</Grid>
  </Grid>


}

export default AccordionMatchElement;

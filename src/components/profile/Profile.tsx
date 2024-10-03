import React, { FC, useState } from "react";
import { ProfileProps } from "../../interfaces/ComponentsInterfaces";
import MatchesAccordion from "./matches/FullMatchesAccordion";
import { Button, ButtonGroup } from "@mui/material";
import Analysis from "./analysis/Analysis";



const Profile: FC<ProfileProps> = ({ username }) => {
  return (
    <ProfileContent username={username}></ProfileContent>
  );
};

const ProfileContent: FC<ProfileProps> = ({ username }) => {
  const [tabValue, setTabValue] = useState("matches");

  const handleClick = event => {
    setTabValue(event.target.id)
  }

  return (
    <>
      <ButtonGroup variant="outlined">
        <Button id="matches" onClick={handleClick}>Historique des matchs</Button>
        <Button id="analysis" onClick={handleClick}>Analyse des compositions</Button>
      </ButtonGroup>
      {defineComponent(tabValue, username)}
    </>
  );
};

function defineComponent(tabValue: string, username: string) {
  if (tabValue == "matches") {
    return <MatchesAccordion username={username} />
  } else {
    return <Analysis username={username}/>;
  }
}

export default Profile;

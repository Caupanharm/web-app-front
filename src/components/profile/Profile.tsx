import React, { FC, useState } from "react";
import { ProfileProps } from "../../interfaces/ComponentsInterfaces";
import MatchesAccordion from "./matches/FullMatchesAccordion";
import { Button, Box, Typography } from "@mui/material";
import Analysis from "./analysis/Analysis";
import { useTheme } from '@mui/material/styles';

const Profile: FC<ProfileProps> = ({ username }) => {
  return (
    <ProfileContent username={username}></ProfileContent>
  );
};

const ProfileContent: FC<ProfileProps> = ({ username }) => {
  const theme = useTheme();

  const [selectedButton, setSelectedButton] = useState("matches");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleClick = event => {
    setSelectedButton(event.target.id)
  }


  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", marginTop: "16px" }}>
        <Typography variant="h3" sx={{ color: theme.palette.text.secondary, marginRight: "16px" }}>Profil de</Typography>
        <Typography variant="h3" sx={{ color: theme.palette.secondary.light }}>{username.split('#')[0]}</Typography>
        <Typography variant="h6" sx={{ color: theme.palette.secondary.dark }}>#{username.split('#')[1]}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "16px" }}>
          <Button id="matches"
            onClick={handleClick}
            onMouseEnter={() => setHoveredButton("matches")}
            onMouseLeave={() => setHoveredButton(null)}
            variant={selectedButton === "matches" ? "outlined" : "text"}
            sx={{
              width: "25%",
              color: hoveredButton === "analysis" ? theme.palette.text.secondary : selectedButton === 'matches' ? theme.palette.secondary.main : theme.palette.text.secondary,
              borderColor: selectedButton === 'matches' ? theme.palette.secondary.main : theme.palette.text.secondary,
            }}
          >
            Historique des matchs
          </Button>
          <Button id="analysis"
            onClick={handleClick}
            onMouseEnter={() => setHoveredButton("analysis")}
            onMouseLeave={() => setHoveredButton(null)}
            variant={selectedButton === "analysis" ? "outlined" : "text"}
            sx={{
              width: "25%",
              color: hoveredButton === "matches" ? theme.palette.text.secondary : selectedButton === 'analysis' ? theme.palette.secondary.main : theme.palette.text.secondary,
              borderColor: selectedButton === 'analysis' ? theme.palette.secondary.main : theme.palette.text.secondary,
            }}>Analyse de match</Button>
      </Box>
      {defineComponent(selectedButton, username)}
    </>
  );
};

function defineComponent(tabValue: string, username: string) {
  if (tabValue == "matches") {
    return <MatchesAccordion username={username} />
  } else {
    return <Analysis username={username} />;
  }
}

export default Profile;

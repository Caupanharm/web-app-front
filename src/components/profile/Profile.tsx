import React, { FC, useState } from "react";
import { ProfileProps } from "../../interfaces/ComponentsInterfaces";
import MatchesAccordion from "./matches/FullMatchesAccordion";
import { Button, ButtonGroup, Box, Typography } from "@mui/material";
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
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "16px" }}>
        <Box>
          <Button id="matches"
            onClick={handleClick}
            onMouseEnter={() => setHoveredButton("matches")}
            onMouseLeave={() => setHoveredButton(null)}
            variant={selectedButton === "matches" ? "outlined" : "text"}
            sx={{
              color: hoveredButton === "analysis" ? "inherit" : selectedButton === 'matches' ? theme.palette.secondary.main : 'inherit',
              borderColor: selectedButton === 'matches' ? theme.palette.secondary.main : 'inherit',
              '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.secondary.main,
              },
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
              color: hoveredButton === "matches" ? "inherit" : selectedButton === 'analysis' ? theme.palette.secondary.main : 'inherit',
              borderColor: selectedButton === 'analysis' ? theme.palette.secondary.main : 'inherit',
              '&:hover': {
                backgroundColor: 'transparent',
                color: theme.palette.secondary.main,
              },
            }}>Analyse des compositions</Button>
        </Box>
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

import React, { useState, useEffect } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavButtonsProps } from "../interfaces/ComponentsInterfaces";
import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function NavButtons({
  page,
  setPage,
  dataSize,
  pageSize,
}: NavButtonsProps) {
  const theme = useTheme()
  const [prevButtonState, setPrevButtonState] = useState<boolean>(true);
  const [nextButtonState, setNextButtonState] = useState<boolean>(false);

  const lastPageSize = dataSize % pageSize
  const numberOfPages = (lastPageSize > 0) ? Math.floor(dataSize / pageSize) + 1 : Math.floor(dataSize / pageSize)

  useEffect(() => { // First render and everytime the page changes
    setPrevButtonState(page > 0)
    setNextButtonState(page < Math.floor(dataSize / pageSize));
  }, [page]);

  const handleDisplay = (event) => {
    const requestedPage = (event.target.id === "prev") ? page - 1 : page + 1

    if (requestedPage < 0) {
      setPage(0)
    } else if (requestedPage >= numberOfPages) {
      setPage(numberOfPages - 1)
    } else {
      setPage(requestedPage)
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
      <Button id="prev"
        sx={{ color: theme.palette.secondary.main, justifyContent: "left" }}
        onClick={handleDisplay} disabled={!prevButtonState} variant="contained" startIcon={<NavigateBeforeIcon />} size="large">Page précédente</Button>
      <Typography sx={{ color: theme.palette.text.secondary, marginRight: "16px" }}>Page {page + 1}/{Math.floor(dataSize / pageSize) + 1}</Typography>
      <Button id="next"
        sx={{ color: theme.palette.secondary.main, justifyContent: "right" }}
        onClick={handleDisplay} disabled={!nextButtonState} variant="contained" endIcon={<NavigateNextIcon />} size="large">Page suivante</Button>
    </div>
  );
}

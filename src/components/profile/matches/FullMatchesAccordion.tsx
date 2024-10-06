import React, { FC, useState, Suspense } from "react";
import AccordionMatchElement from "./AccordionMatchElement";
import {
  useSuspenseQuery,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import Loader from "../../Loader";
import NavButtons from "../../NavButtons"
import { fetchPlayerMatches } from "../../../queries";
import { FullMatchesAccordionProps } from "../../../interfaces/ComponentsInterfaces";
import { Box } from "@mui/material";
import { CaupanharmResponse } from "../../../interfaces/data/CaupanharmResponse";
import { CaupanharmMatches } from "../../../interfaces/data/CaupanharmMatches";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const MatchesAccordion: FC<FullMatchesAccordionProps> = ({ username }) => {
  const { data: playerMatchesData } = useSuspenseQuery({
    queryKey: ["playerMatchesData", username],
    queryFn: () => fetchPlayerMatches(username),
    refetchOnWindowFocus: false,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        {renderData(playerMatchesData)}
      </Suspense>
    </QueryClientProvider>
  );
};

const renderData = (playerMatchesData: CaupanharmResponse) => {
  if (playerMatchesData.bodyType === "matches") {
    const matches = playerMatchesData.body as CaupanharmMatches

    const [matchPage, setMatchPage] = useState<number>(0);
    const pageSize = 15
    const lastPageSize = matches.data.length % pageSize
    const numberOfPages = (lastPageSize > 0) ? Math.floor(matches.data.length / pageSize) + 1 : Math.floor(matches.data.length / pageSize)


    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

    return (
      <Box sx={{my:"1%", mx: "20%"}}>
        {matches.data.slice(matchPage * pageSize, pageSize + matchPage * pageSize).map((item, index) => {
          return (
            <AccordionMatchElement
              key={item.metadata.id}
              id={item.metadata.id}
              className={index === 0 ? 'firstAccordion' : index === pageSize-1 || (matchPage === numberOfPages && index === lastPageSize - 1) ? 'lastAccordion' : ''}
              data={item}
              expanded={expanded}
              onChange={handleChange}
            />
          );
        })}
        <NavButtons page={matchPage} setPage={setMatchPage} dataSize={matches.dataInitialSize} pageSize={pageSize} />
      </Box>
    )
  } else {
    return "error"
  }


}

export default MatchesAccordion;

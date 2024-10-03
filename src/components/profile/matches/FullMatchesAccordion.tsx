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
import { V1LifetimeMatches, HenrikErrorsInterface } from "../../../interfaces/HenrikInterfaces";
import { Box } from "@mui/material";

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

const renderData = (playerMatchesData: V1LifetimeMatches | HenrikErrorsInterface) => {
  if (isV1LifetimeMatchesInterface(playerMatchesData)) {

    const [matchPage, setMatchPage] = useState<number>(0);
    const pageSize = 15
    const lastPageSize = playerMatchesData.data.length % pageSize
    const numberOfPages = (lastPageSize > 0) ? Math.floor(playerMatchesData.data.length / pageSize) + 1 : Math.floor(playerMatchesData.data.length / pageSize)


    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

    return (
      <Box sx={{m:"1%"}}>
        {playerMatchesData.data.slice(matchPage * pageSize, pageSize + matchPage * pageSize).map((item, index) => {
          return (
            <AccordionMatchElement
              key={item.meta.id}
              id={item.meta.id}
              className={index === 0 ? 'firstAccordion' : index === pageSize-1 || (matchPage === numberOfPages && index === lastPageSize - 1) ? 'lastAccordion' : ''}
              data={item}
              expanded={expanded}
              onChange={handleChange}
            />
          );
        })}
        <NavButtons page={matchPage} setPage={setMatchPage} dataSize={playerMatchesData.results.returned} pageSize={pageSize} />
      </Box>
    )
  } else {
    return "error"
  }


}


function isV1LifetimeMatchesInterface(
  data: V1LifetimeMatches | HenrikErrorsInterface
): data is V1LifetimeMatches {
  return "results" in data;
}

export default MatchesAccordion;

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


    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };

    return (
      <>
        <NavButtons page={matchPage} setPage={setMatchPage} dataSize={playerMatchesData.results.returned} pageSize={pageSize} />
        {playerMatchesData.data.slice(matchPage * pageSize, pageSize + matchPage * pageSize).map((item) => {
          return (
            <AccordionMatchElement
              key={item.meta.id}
              id={item.meta.id}
              data={item}
              expanded={expanded}
              onChange={handleChange}
            />
          );
        })}
      </>
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

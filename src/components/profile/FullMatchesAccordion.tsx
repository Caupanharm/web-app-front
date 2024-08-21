import React, { FC, useState } from "react";
import { FullMatchesAccordionProps } from "../../interfaces/HenrikInterfaces";
import AccordionMatchElement from "./AccordionMatchElement";


const MatchesAccordion: FC<FullMatchesAccordionProps> = ({ data, page, pageSize }) => {
  const [expanded, setExpanded] = useState<string | false>(false);


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {data.data.slice(page*pageSize, pageSize+page*pageSize).map((item) => {
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
  );
};

export default MatchesAccordion;

import { CaupanharmMatchLight } from "./data/CaupanharmMatchLight";

export interface FullMatchesAccordionProps {
  username: string;
}

export interface AnalysisProps {
  username: string
}

export interface AccordionMatchElementProps {
  id: string;
  className: string,
  data: CaupanharmMatchLight;
  expanded: string | false;
  onChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
}

export interface DamageSummaryProps {
  data: CaupanharmMatchLight
}

export interface ShotsSummaryProps {
  data: CaupanharmMatchLight
}

export interface MatchSummaryProps {
  data: CaupanharmMatchLight
}

export interface PlayerCardProps {
  id: number;
  onClick: (id: number) => void;
  width: string;
  player: {
    name: string;
    stats: {
      favoriteAgents: string[];
      wins: number;
      losses: number;
    };
  };
}

export interface ProfileProps {
  username: string
}

export interface NavButtonsProps {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>
  dataSize: number
  pageSize: number
}

export interface GaugeChartComponentProps {
  id: string,
  nrOfLevels?: number,
  arcsLength?: number[],
  colors: string[]
  values?: {
    value: number,
    minValue: number
    maxValue: number
  },
  hideNeedle?: boolean
}
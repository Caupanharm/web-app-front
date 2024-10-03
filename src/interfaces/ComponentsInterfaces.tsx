import { V1LifetimeMatchItem, V1LifetimeMatchItemTeams, Damage, Shots } from "./HenrikInterfaces";

export interface FullMatchesAccordionProps {
    username: string;
  }
  
  export interface AnalysisProps {
    username: string
  }

export interface AccordionMatchElementProps {
    id: string;
    className: string,
    data: V1LifetimeMatchItem;
    expanded: string | false;
    onChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
  }
  
  export interface DamageSummaryProps{
    damage: Damage
    teams: V1LifetimeMatchItemTeams
  }
  
  export interface ShotsSummaryProps{
    shots: Shots
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
  
  export interface NavButtonsProps{
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
    dataSize: number
    pageSize: number
  }
  
  export interface GaugeChartComponentProps{
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
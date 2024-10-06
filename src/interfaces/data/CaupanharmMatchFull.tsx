export interface CaupanharmMatchFull{
    metadata: CaupanharmMatchMetadata,
    players: CaupanharmMatchPlayer[],
    teams: CaupanharmMatchTeam[],
    rounds: CaupanharmMatchRound[],
    kills: CaupanharmMatchKill[]
}

interface CaupanharmMatchMetadata{
    id: string,
    map: string,
    gameLengthMillis: number,
    gameStart: string,
    isCompleted: boolean,
    queue?: string,
    season: string
}

interface CaupanharmMatchPlayer{
    id: string,
    name: string,
    team: string,
    party: string,
    rank?: string,
    agent: string,
    stats: CaupanharmPlayerStats,
    abilityCasts: CaupanharmAbilities,
    behavior: BehaviorSummary,
    totalEconomy: TotalEconomy
}

interface CaupanharmPlayerStats{
    score: number,
    kills: number,
    deaths: number,
    assists: number,
    headshots: number,
    bodyshots: number,
    legshots: number,
    damageDealt: number,
    damageReceived: number
}

interface CaupanharmAbilities{
    ability1: number,
    ability2: number,
    ability3: number,
    ultimate: number
}

interface BehaviorSummary{
    afk: number,
    dealtFriendlyFire: number,
    receivedFriendlyFire: number,
    inSpawn: number
}

interface RoundBehavior{
    afk: boolean,
    penalised: boolean,
    inSpawn: boolean
}

interface TotalEconomy{
    spent: number,
    loadout: number
}

interface RoundEconomy{
    loadoutValue: number,
    remaining: number,
    weapon?: string,
    armor?: string
}

interface CaupanharmMatchTeam{
    id: string,
    allyScore: number,
    enemyScore: number
}

interface CaupanharmMatchRound{
    winningTeam: string,
    result: "elimination" | "defuse" | "detonate" | "",
    ceremony: string, // TODO could be defined : clutch, thrifty...
    plantEvent?: BombEvent,
    defuseEvent?: BombEvent,
    stats: RoundPlayerStats[]
}

interface BombEvent{
    roundTimeMillis: number,
    site?: string,
    location?: Location,
    player: string,
    playersLocation?: PlayerLocation[]
}

interface PlayerLocation{
    player: string,
    location?: Location
}

interface Location{
    x: number,
    y: number
}

interface RoundPlayerStats{
    player: string,
    abilityCasts: CaupanharmAbilities,
    damageEvents: DamageEvent[],
    stats: RoundPlayerStatsRecap,
    economy: RoundEconomy,
    behavior: RoundBehavior
}

interface RoundPlayerStatsRecap{
    score: number,
    kills: number,
    headshots: number,
    bodyshots: number,
    legshots: number
}

interface DamageEvent{
    player: string,
    damage: number,
    headshots: number,
    bodyshots: number,
    legshots: number
}

interface CaupanharmMatchKill{
    round: number,
    roundTimeMillis: number,
    matchTimeMillis: number,
    killer: string,
    victim: string,
    assistants?: string[],
    location?: string,
    weapon?: string,
    secondaryFire: boolean,
    playersLocation: PlayerLocation[]
}
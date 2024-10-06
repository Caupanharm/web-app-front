export interface CaupanharmMatchLight{
    metadata: CaupanharmMatchLightMetadata,
    stats: CaupanharmMatchLightStats,
    formattedStats: CaupanharmMatchLightStatsFormatted
}

interface CaupanharmMatchLightMetadata{
    id: string,
    map: string,
    startTime: string,
    season: string,
    region: string,
    cluster: string
}

interface CaupanharmMatchLightStats{
    team: string,
    allyScore: number,
    enemyScore: number,
    agent: string,
    tier: number,
    combatScore: number,
    kills: number,
    deaths: number,
    assists: number,
    headshots: number,
    bodyshots: number,
    legshots: number,
    damageDealt: number,
    damageReceived: number
}

interface CaupanharmMatchLightStatsFormatted{
    gameIssue: string,
    kda: string,
    kd: number,
    dd: number,
    hsp : number,
    bsp: number,
    lsp: number,
    adr: number,
    acs: number
}
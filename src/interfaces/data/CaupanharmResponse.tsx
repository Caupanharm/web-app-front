import { CaupanharmPlayer } from "./CaupanharmPlayer"
import { CaupanharmMatches } from "./CaupanharmMatches"
import { CaupanharmMatchLight } from "./CaupanharmMatchLight"
import { CaupanharmMatchFull } from "./CaupanharmMatchFull"

export interface CaupanharmResponse {
    statusCode: number,
    errorCode?: number,
    bodyType: "player" | "matches" | "matchLight" | "matchFull" | "exception",
    body?: CaupanharmPlayer | CaupanharmMatches | CaupanharmMatchLight | CaupanharmMatchFull | any // TODO replace any when exception/error management is implemented
}
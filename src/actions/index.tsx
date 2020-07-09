import { PROPOSE_PROJECT, ACCESS_INTERESTED_DEV_LIST, ACCESS_OFFERED_PROJECT, ACCESS_OFFERED_PROJECT_LIST, OFFER_SERVICE_TO_PROJECT, SELECT_INTERESTED_DEV} from "../constants/action-types"

export function proposeProject(payload : {}){
    return { type: PROPOSE_PROJECT, payload}
}


import { PROPOSE_PROJECT } from "../constants/action-types"

const initialState = {
    proposedProjects: []
}

function rootReducer(state = initialState, action : { type :string, payload :any}){
    if(action.type === PROPOSE_PROJECT){
        return Object.assign({}, state, {
            proposedProjects: state.proposedProjects.concat(action.payload)
        })
    }
    return state
}

export default rootReducer

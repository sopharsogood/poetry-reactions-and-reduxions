import { LOAD_POEMS } from "../Actions/actionTypes";

function poemsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_POEMS:
            return {
                ...state,
                poems: action.poems
            }
        default:
            return state
    }
}

export default poemsReducer;
import { LOAD_POEMS } from "../Actions/actionTypes";

function poemsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_POEMS:
            console.log(action.poems)
            return action.poems
        default:
            return state
    }
}

export default poemsReducer;
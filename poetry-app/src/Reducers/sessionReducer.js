import { LOGIN, LOGOUT } from "../Actions/actionTypes";

function usersReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return action.user
        case LOGOUT:
            return {}
        default:
            return state
    }
}

export default usersReducer;
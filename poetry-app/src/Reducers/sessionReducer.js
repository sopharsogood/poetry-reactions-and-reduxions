import { LOGIN, LOGOUT } from "../Actions/actionTypes";

function sessionReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return action.user
        case LOGOUT:
            return {
                userid: 0,
                username: ""
            }
        default:
            return state
    }
}

export default sessionReducer;
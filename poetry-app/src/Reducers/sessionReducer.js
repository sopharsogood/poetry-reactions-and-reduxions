import { LOGIN, LOGOUT } from "../Actions/actionTypes";

function sessionReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {
                userid: action.user.id,
                username: action.user.username
            }
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
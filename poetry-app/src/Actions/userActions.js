import { LOGIN, LOGOUT } from "./actionTypes";

export function attempt_login(user) {
    return dispatch => {
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        },
            { withCredentials: true }
        )
            .then(resp => resp.json())
            .then(response_user => {
                if (response_user) {
                    dispatch({ type: LOGIN, user: response_user })
                } 
            }
        )
    }
}
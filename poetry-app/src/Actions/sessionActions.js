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

export function attempt_register(user) {
    return dispatch => {
        fetch("/users/new", {
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

export function attempt_logout() {
    return dispatch => {
        fetch("/logout", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        },
            { withCredentials: true }
        )
            .then(resp => resp.json())
            .then(response => {
                if (response) {
                    dispatch({ type: LOGOUT })
                } 
            }
        )
    }
}
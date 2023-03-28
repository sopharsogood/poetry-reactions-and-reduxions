import { LOAD_POEMS } from "./actionTypes"

export function fetchPoems() {
    const poemsdata = fetch("/poems", {
            method: "GET"
        })
            .then(resp => resp.json())
    return poemsdata
}

export function loadPoems(poems) {
    return { type: LOAD_POEMS, poems: poems }
}
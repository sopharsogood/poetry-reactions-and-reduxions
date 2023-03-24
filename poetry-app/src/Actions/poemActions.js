export function fetch_poems() {
    return fetch("/poems", {
            method: "GET"
        })
            .then(resp => resp.json())
}
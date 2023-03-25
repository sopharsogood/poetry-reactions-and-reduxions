export function fetch_poems() {
    const poemsdata = fetch("/poems", {
            method: "GET"
        })
            .then(resp => resp.json())
    console.log(poemsdata)
    return poemsdata
}
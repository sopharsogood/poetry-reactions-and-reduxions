import { LOAD_SHOWPOEM_AND_COMMENTS } from "./actionTypes";

export function fetchShowpoemAndComments(showpoemId) {
    const showpoemDataUrl = "/poems/" + showpoemId
    const showpoemData = fetch(showpoemDataUrl, {
            method: "GET"
        })
            .then(resp => resp.json())
    return showpoemData
}
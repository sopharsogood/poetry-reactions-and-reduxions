import { LOAD_SHOWPOEM_AND_COMMENTS } from "../Actions/actionTypes";

function showpoemReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_SHOWPOEM_AND_COMMENTS:
            return {
                title: action.showpoem.title,
                content: action.showpoem.content,
                author: action.showpoem.author
            }
        default:
            return state
    }
}

export default showpoemReducer;
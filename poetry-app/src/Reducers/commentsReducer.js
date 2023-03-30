import { LOAD_SHOWPOEM_AND_COMMENTS } from "../Actions/actionTypes";

function commentsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_SHOWPOEM_AND_COMMENTS:
            console.log(action)
            return action.showpoem.comments
        default:
            return state
    }
}

export default commentsReducer;
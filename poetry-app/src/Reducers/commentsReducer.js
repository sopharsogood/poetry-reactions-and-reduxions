function commentsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_SHOWPOEM_AND_COMMENTS:
            return action.showpoem.comments
        default:
            return state
    }
}

export default commentsReducer;
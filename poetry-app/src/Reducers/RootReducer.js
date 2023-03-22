import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import poemsReducer from './poemsReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    poems: poemsReducer,
    comments: commentsReducer
});

export default rootReducer;
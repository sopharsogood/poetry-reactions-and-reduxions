import { combineReducers } from 'redux'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    poems: poemsReducer,
    comments: commentsReducer
});

export default rootReducer;
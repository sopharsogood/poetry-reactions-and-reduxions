import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import poemsReducer from './poemsReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    poems: poemsReducer
});

export default rootReducer;
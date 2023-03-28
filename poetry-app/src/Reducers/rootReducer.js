import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import poemsReducer from './poemsReducer';
import showpoemReducer from './showpoemReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    poems: poemsReducer,
    showpoem: showpoemReducer,
    comments: commentsReducer
});

export default rootReducer;
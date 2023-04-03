import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import poemsReducer from './poemsReducer';
import showpoemReducer from './showpoemReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    poems: poemsReducer,
    showpoem: showpoemReducer,
    comments: commentsReducer
});

export default rootReducer;
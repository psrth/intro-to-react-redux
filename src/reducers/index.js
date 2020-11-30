import { combineReducers } from 'redux';

import postReducer from './post';
import isLoggedReducer from './isLogged';

const allReducers = combineReducers({
    post : postReducer,
    isLogged : isLoggedReducer
})

export default allReducers;
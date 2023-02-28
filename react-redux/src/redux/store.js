import {applyMiddleware, combineReducers, createStore} from 'redux'
import myLogger from './middlewares/mylogger';
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    applyMiddleware(myLogger)

)
    // combineReducers(applyMiddleware(myLogger));

export default store;
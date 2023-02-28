import React from 'react'
import { combineReducers } from 'redux';
import counterReducer from './counter/counterReducer';
import { DynamicCounterReducer } from './DynamicCounter/DynamicCounterReducer';

const rootReducer = combineReducers({
     counter: counterReducer, 
     daynamicReducer: DynamicCounterReducer,
    })
export default rootReducer;

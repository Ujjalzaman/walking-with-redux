import { legacy_createStore as createStore } from "redux";
import productReducer from './product/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(productReducer, composeWithDevTools());

export default store;
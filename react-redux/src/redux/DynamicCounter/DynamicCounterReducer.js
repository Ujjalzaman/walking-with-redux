import { DECREMENT, INCREMENT } from "./actionTypes";

const INITIAL_STATE = {
    value:0
}
export const DynamicCounterReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            };
        default:
            return state;
    }
}
export default DynamicCounterReducer;
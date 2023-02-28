import { DECREMENT, INCREMENT } from "./actionTypes";

const INITIAL_STATE = {
    value:0
}
export const counterReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return INITIAL_STATE;
    }
}
export default counterReducer;
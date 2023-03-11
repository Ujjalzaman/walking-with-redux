import initialState from './initialState';
import {ADDBOOKING, DELETEBOOKING} from './actionType'


const GenerateNextId = (curArray) =>{
    const genId = curArray.reduce((acc, cur) => Math.max(cur.id, acc), -1)
    return genId + 1;
}
const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADDBOOKING:
            return [
                ...state,
                {
                    id: GenerateNextId(state),
                    ...action.payload
                }
            ]
        case DELETEBOOKING:
            return state.filter((item) => item.id !== action.payload)
    
        default:
            return state;
    }    
}
export default reducer;
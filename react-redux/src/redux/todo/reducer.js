import { ADDED, COMPLETEALLTASK } from "./actiontype";
import initialState from "./initialState";

const nextTodoId = (todos) =>{
    const maxId =  todos.reduce((prev, cur) => Math.max(cur.id, prev), -1)
    return maxId + 1
}

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                }
            ]
        case COMPLETEALLTASK:
            return state.map((todo) =>{
                return {
                    ...todo,
                    completed: true,
                }
            })

        default:
            return state;
    }
}
export default reducer;
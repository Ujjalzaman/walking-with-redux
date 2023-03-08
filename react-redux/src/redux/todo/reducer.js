import { ADDED, COMPLETEALLTASK, CLEARCOMPLETED, TOGGLED, DELETED, COLORSELECTED } from "./actiontype";
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
        case CLEARCOMPLETED:
            return state.filter((todo) => !todo.completed)

        case TOGGLED:
            return state.map((todo) =>{
                if(todo.id !== action.payload){
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case DELETED:
            return state.filter((todo) => todo.id !== action.payload)
        
        case COLORSELECTED:
            const {color, todoId} = action.payload;
            return state.map((todo) =>{
                if(todo.id !== todoId){
                    return todo;
                }
                return {
                    ...todo,
                    color: color
                }
            })

        default:
            return state;
    }
}
export default reducer;
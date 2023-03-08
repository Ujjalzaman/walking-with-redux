import { COLORSELECTED,DELETED,ADDED, COMPLETEALLTASK,CLEARCOMPLETED,TOGGLED } from "./actiontype"

export const added = (text) =>{
    return {
        type: ADDED,
        payload: text,
    }
}
export const completeAll = () =>{
    return {
        type: COMPLETEALLTASK
    }
}
export const clearCompleted = () =>{
    return {
        type: CLEARCOMPLETED
    }
}
export const toggled = (todoId) =>{
    return {
        type: TOGGLED,
        payload: todoId
    }
}
export const deleted = (todoId) =>{
    return {
        type: DELETED,
        payload: todoId
    }

}
export const colorSelected =(todoId, color) =>{
    return{
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}
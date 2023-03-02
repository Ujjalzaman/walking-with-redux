import { ADDED, COMPLETEALLTASK } from "./actiontype"

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
import { COLORCHANGED, STATUSCHANGED } from "./actiontype"

export const statusChanged = (status) =>{
    return {
        type: STATUSCHANGED,
        payload: status
    }
}
export const colorChanged = (color, changeType) =>{
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}
import {ADDBOOKING, DELETEBOOKING} from './actionType'

export const addBooking = (obj) =>{
    return {
        type: ADDBOOKING,
        payload: obj
    }
}
export const deleteBooking = (id) =>{
    return {
        type: DELETEBOOKING,
        payload: id
    }
}
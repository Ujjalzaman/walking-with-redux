import { ADDPRODUCT, ADDTOCART } from "./actionTypes"

export const addProduct = (productObj) =>{
    return {
        type: ADDPRODUCT,
        payload: productObj
    }
}
export const addToCart = (id) =>{
    return {
        type: ADDTOCART,
        payload: id,
    }
}
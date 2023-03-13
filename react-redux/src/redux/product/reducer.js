import { ADDPRODUCT, ADDTOCART } from "./actionTypes";

const initalState = [
 {
    id: 0,
    productName: 'Spring and Summershoes',
    category: 'Mens shoes',
    imageUrl: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
    price: 400,
    inventory: 8,
    cartQuantity: 10,
  },
  {
    id: 1,
    productName: 'Formal shoes',
    category: 'Mens shoes',
    imageUrl: 'https://i.dummyjson.com/data/products/58/thumbnail.jpg',
    price: 800,
    inventory: 10,
    cartQuantity: 5,
  }, 
]
const genMaxId = (products) =>{
    const maxId = products.reduce((acc, cur) => Math.max(cur.id, acc), -1)
    return maxId + 1
}


const productReducer = (state=initalState, action) =>{
    switch (action.type) {
        case ADDPRODUCT:
            return [
                ...state,
                {
                    id: genMaxId(state),
                    ...action.payload
                }
            ]
        case ADDTOCART: 
            return state.map((product) =>{
                if(product.id !== action.payload){
                    return product;
                }
                return {
                    ...product,
                    cartQuantity: product.cartQuantity + 1,
                    inventory: product.inventory - 1
                }
            })
            
        default:
            return state;
    }
}
export default productReducer;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/product/action';

const Products = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch();
  const handleAddCart = (id) =>{
    dispatch(addToCart(id))
  }
  return (
    <div className="productContainer" id="lws-productContainer">
      {state.map((item) =>(
        <div className="lws-productCard" key={item.id}>
          <img className="lws-productImage" src={item.imageUrl} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{item.productName}</h4>
            <p className="lws-productCategory">{item.category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{item.price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{item.cartQuantity}</span></p>
            </div>
            <button className="lws-btnAddToCart" onClick={() =>handleAddCart(item.id)}>Add To Cart</button>
          </div>
        </div>
      ))}
      </div>
  )
}

export default Products
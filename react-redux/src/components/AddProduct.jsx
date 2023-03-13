import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/product/action';
import Products from './Products';

const AddProduct = () => {
  const [input, setInput] = useState({});
  const dispatch = useDispatch();
  const handleOnChange = (e) =>{
    setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  }
  const handleOnSubmit =(e) =>{
    e.preventDefault();
    dispatch(addProduct(input));
  }
  return (
    <main className="py-16">
    <div className="productWrapper">
      <Products/>
      <div>
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleOnSubmit}>
        
            <div className="space-y-2">
              <label htmlFor="lws-inputName">Product Name</label>
              <input onChange={handleOnChange} name="productName" className="addProductInput" id="lws-inputName" type="text" required />
            </div>
         
            <div className="space-y-2">
              <label htmlFor="lws-inputCategory">Category</label>
              <input onChange={handleOnChange} name="category" className="addProductInput" id="lws-inputCategory" type="text" required />
            </div>
       
            <div className="space-y-2">
              <label htmlFor="lws-inputImage">Image Url</label>
              <input onChange={handleOnChange} name="imageUrl" className="addProductInput" id="lws-inputImage" type="text" required />
            </div>
      
            <div className="grid grid-cols-2 gap-8 pb-4">
           
              <div className="space-y-2">
                <label htmlFor="ws-inputPrice">Price</label>
                <input onChange={handleOnChange} name="price" className="addProductInput" type="number" id="lws-inputPrice" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="lws-inputQuantity">Quantity</label>
                <input onChange={handleOnChange} name="inventory" className="addProductInput" type="number" id="lws-inputQuantity" required />
              </div>
            </div>
            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  </main>
  )
}

export default AddProduct
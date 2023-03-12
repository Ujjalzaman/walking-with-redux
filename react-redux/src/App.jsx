import React, { useState } from 'react';
import AddProduct from './components/AddProduct';
import Cart from './components/cart';
import Header from './components/Header';
import { useSelector } from 'react-redux';
const App = () => {
  const state = useSelector((state) => state)
  const [show, setShow] = useState(true);
  console.log(state)

  
  return (
    <div>
      <Header show={show} setShow={setShow} />
      {show ? <AddProduct /> : <Cart />}
    </div>
  )
}

export default App
import React, { useState } from 'react'
import AddProduct from './components/AddProduct'
import Cart from './components/cart'
import Header from './components/Header'

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Header show={show} setShow={setShow}/>
      {show ? <AddProduct/>: <Cart/>}
    </div>
  )
}

export default App
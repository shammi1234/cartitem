import React from 'react';
import {Route,Routes} from "react-router-dom"
import Cart from '../Products/Cart';
import Products from '../Products/Products';

const Routess = ({productItem,cartItems, handleAddProduct,removeItem}) => {
  return <div>
      <Routes>
          <Route  exact path="/" element={ <Products productItem={productItem} cartItems={cartItems}  handleAddProduct={ handleAddProduct}/>}>
  
          </Route>
          <Route path="/Cart" element={<Cart cartItems={cartItems}  handleAddProduct={ handleAddProduct} removeItem={removeItem} />}></Route>
      </Routes>
     
  </div>;
};

export default Routess;

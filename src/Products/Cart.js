import React, { useEffect, useState } from "react";
import { stockData } from "../data";

const Cart = ({  removeItem }) => {
 const [cartItems,setcartItems] =  useState([])
 const [ change,setchange] =  useState(false)
useEffect(()=>{
  setcartItems(JSON.parse(localStorage.getItem("cart")))
},[])
useEffect(()=>{
  setcartItems(JSON.parse(localStorage.getItem("cart")))
},[change])
  return (
    <div>
      <h2>cart</h2>
      <div className="NoItem">
        {cartItems.length === 0 && <h3> No Item added</h3>}
      </div>
      <div>
        {stockData.productItem.map((item) => {
          return cartItems.map((id) => {
            if (id === item.id) {
              return (
                <div className="item" key={item.id}>
                  <img className="image" src={item.image} alt={item.title} />

                  <h6> {item.title} </h6>

                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setchange(pre=>!pre)
                      removeItem(item.id)}
                    }
                  >
                    {" "}
                    remove Item
                  </button>
                </div>
              );
            }
          });
        })}
      </div>
    </div>
  );
};

export default Cart;

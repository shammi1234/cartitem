import React, { useEffect, useState } from 'react';
import Card from './Card';

    const fetchURL = 'https://fakestoreapi.com/products'
    
    const AddCart = () => {
        const [cart, setData] = useState([]);
        const getData = () =>
        fetch(`${fetchURL}`)
          .then((res) => res.json())

useEffect( ()=>{
    getData().then(
        (data) => setData(data)
    )
    localStorage.setItem("cart", JSON.stringify(cart))
},[cart]);

const addItem=(itemId)=>{ 
    console.log("itemadd")
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => itemId.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...itemId,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setData(newCart);
   
  };



  return (
    <div>
      {cart?.map((item,id) => 
      
       <div class = "item" key={id}>
           <img className ="image" src={item.image} alt= {item.title}/>
       
       <h6> {item.title} </h6> 
        
        <button className="btn btn-primary" onClick= {()=> addItem()}> add item</button>
        </div>
      )}
    </div>
  )
}

export default AddCart;

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { stockData } from './data';
import Items from './Items';

    // const fetchURL = 'https://fakestoreapi.com/products'

    
    
    const AddCart = () => {
        const [cart, setData] = useState(stockData);
const[add,setAdd]= useState([])

//         const addItems= (id)=>{

//           let data= [...cart];
//           const index = data.indexOf(getItem(id));
//           const product = data[index];
          
// console.log("item",product);

//   let stored= [];
//     stored.push(product);
//    localStorage.setItem("cart",JSON.stringify(stored));

//         }

//        const getItem =(id)=>{
// const product= stockData.find(item=> item.id===id)
// return product
//         }



const addItems=(id)=>{
  setAdd([...cart,id]);
console.log("add")
}




//         const getData = () =>
//         fetch(`${fetchURL}`)
//           .then((res) => res.json())

// useEffect( ()=>{
//     getData().then(
//         (data) => setData(data)
//     )
//     localStorage.setItem("cart", JSON.stringify(cart))
// },[cart]);

// const addItem=(itemId)=>{ 
//     console.log("itemadd");
//     let newCart = [...cart];
   
//     let itemInCart = newCart.find(
//       (item) => itemId.name === item.name
//     );
//     if (itemInCart) {
//       itemInCart.quantity++;
//     } else {
//       itemInCart = {
//         ...itemId,
//         quantity: 1,
//       };
//       newCart.push(itemInCart);
//     }
//    let ss= setData(newCart);
//     localStorage.setItem("cart", JSON.stringify(ss))
//   };
  



  return (
     <div>
    

    <div className="items"> 
<h3 className="itm"> Items <span>({add.length})</span></h3>
</div>
      <hr/>
      {cart.map((item,id) => 
      
       <div className = "item" key={id}>
           <img className ="image" src={item.image} alt= {item.title}/>
       
       <h6> {item.title} </h6> 
        
        <button className="btn btn-primary" onClick={()=>addItems(id)}> add item</button>
        </div>
      )}
    </div>
  )
}

export default AddCart;

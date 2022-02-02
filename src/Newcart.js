import React from 'react';
import { stockData } from './data';

const data= stockData;

class Newcart extends React.Component{    




 
        // function addProductToCart() {
        //     console.log(data)
        //     localStorage.setItem('id', JSON.stringify(data.id));
        //     // localStorage.setItem('title', stockData.title);
        //     // localStorage.setItem('price', stockData.price);
        //     // localStorage.setItem('img', stockData.img);
           
        //   }


    render(){

        function addProductToCart(id,image,title) {
            console.log( id,'data.id')
            
            localStorage.setItem('id', JSON.stringify(id));
            // localStorage.setItem('image', image);
            // localStorage.setItem('title', title);


        }

         function showProduct(){
        
     let tt = document.getElementById('title');
     const img = localStorage.getItem('image');
      document.querySelector("#image").setAttribute("src",img);
    const  title = localStorage.getItem('title');
    document.getElementById('title').innerHTML= title;


         } ;
         function removeProduct(productId) {
            // Your logic for your app.
            // strore products in local storage
            let item= localStorage.removeItem('image');
            document.querySelector("#image").setAttribute("src",item);
          
          
            // let storageProducts = JSON.parse(localStorage.getItem('image'));

            // let products = storageProducts.filter(product => product.productId !== productId );
            // localStorage.setItem('image', JSON.stringify(products)); 
          }

      
        return(
            <>
 <div>
    

    <div className="items"> 
<h3 className="itm"> Items <button onClick={showProduct}>(show)</button></h3>
</div>
      <hr/>
      {stockData.map((item,id) => 
      
       <div className = "item" key={id}>
           <img className ="image" src={item.image} alt= {item.title}/>
       
       <h6> {item.title} </h6> 
        
        <button className="btn btn-primary" onClick ={()=>addProductToCart(item.id,item.image, item.title)}> add item</button>
        </div>
      )}

      <div  id ="show">
      
      <img id = "image" src=""  style={{height:'80px'}}/>
      <h6 id= "title">  </h6>
      <button onClick={removeProduct}>Delete</button>
      </div>
    </div>
            
            </>                
        )
    }
}
export default Newcart;
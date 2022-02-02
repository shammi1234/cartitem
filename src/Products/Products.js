import React from 'react';

const Products = ({productItem, handleAddProduct}) => {
  return <div>
       <div className="items"> 
{/* <h3 className="itm"> Items <span>({add.length})</span></h3> */}
</div>
      <hr/>
      {productItem.map((item) => 
      
       <div className = "item" key={item.id}>
           <img className ="image" src={item.image} alt= {item.title}/>
       
       <h6> {item.title} </h6> 
        
        <button className="btn btn-primary" onClick={()=>handleAddProduct(item.id)} > add item</button>
        </div>
      )}
    </div>
  
};

export default Products;

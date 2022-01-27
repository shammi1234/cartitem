import React from 'react';
// import { stockData } from './data';
const Card = (products, title,image) => {
  return <div>
      <div className= "stock-container" > 
      {products.map((data, key) => {
          return (
            <div key={data.id}>
              <h3> data</h3>
            </div>
          );
        })}

      </div>
  </div>;
};

export default Card;

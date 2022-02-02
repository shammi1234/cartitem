import React from 'react';

const Items = (props) => {
  return <div>
<div className="items"> 
<h3 className="itm"> Items <span>({props.cartLength})</span></h3>
</div>

  </div>;
};

export default Items;

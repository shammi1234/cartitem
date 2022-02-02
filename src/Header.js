import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div>
      <header className="header"> 
      <div>
            <h2>
                <Link to ="/" className="logo"> Products
                </Link>
                </h2>
            </div>
            <div className="header-Links">
                <ul>
                    <li>
                        <Link to ="/Cart">Cart</Link>
                    </li>
                </ul>
            </div>
      </header>
    
  </div>;
};

export default Header;

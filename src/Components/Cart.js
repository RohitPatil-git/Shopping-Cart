import React, { useState } from "react";
import "./cart.css";
import Item from "./Item";
import { products } from "./Itemsarray";
import { Scrollbars } from "react-custom-scrollbars";
import Button from 'react-bootstrap/Button'

const Cart = () => {
  const [mobile, setMobile] = useState(products);
  return (
    <>
      <h2 className="cart-title">My Shopping Cart</h2>
     
      <div className="cart">
      <Scrollbars>
        {mobile.map((elm) => {
          return (
            <>
              <Item key={elm.id } {...elm}/>
            </>
          );
        })}
        </Scrollbars>
       <div className='btn-group'>
       <Button variant="outline-info" size="lg">Total <i class="fas fa-rupee-sign"></i></Button>

       </div>
      </div>
      
    </>
  );
};

export default Cart;

import React, { useContext } from "react";
import Item from "./Item";
import { Scrollbars } from "react-custom-scrollbars";
import Button from "react-bootstrap/Button";
import { appContext } from "./Cart";

const Appcart = () => {
  
  const { mobile , clearCart } = useContext(appContext);
  

  return (
    <div>
      <h2 className="cart-title">
        My Shopping Cart 
      </h2>

      <div className="cart">
        <Scrollbars>
          {mobile.map((elm) => {
            return (
              <>
                <Item key={elm.id} {...elm} />
              </>
            );
          })}
        </Scrollbars>
        <div className="btn-group">
        
          <Button variant="outline-info" >
          total <i className="fas fa-rupee-sign"></i> 20000
          </Button>
          <Button variant="dark" onClick={() => {clearCart()}}>x</Button>
        </div>
      </div>
    </div>
  );
};

export default Appcart;

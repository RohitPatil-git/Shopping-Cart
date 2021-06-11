import React from "react";
import "./cart.css";

const Item = ({id , title , description , price , img}) => {
  return (
    <>

      <hr />
      <div className="cardstyle">
        <img src={img} alt="s21" className="img-style" />
        <p className="titlestyle">
          {title} <br />
          <span className="descstyle">{description}</span>
        </p>
        <div className="quantity">
          <div id="div1" className="square">
            <i className="fas fa-plus p-icon"></i>
          </div>
          <div className="square">1</div>
          <div id="div2" className="square">
            <i className="fas fa-minus"></i>
          </div>
        </div>
        <div className="rmdiv">
        <div className="square"><i class="fas fa-trash"></i></div>
        </div>
        <div className="pricetab">
            <p><i class="fas fa-rupee-sign"></i>{price}</p>
        </div>
      </div>
      
    </>
  );
};

export default Item;

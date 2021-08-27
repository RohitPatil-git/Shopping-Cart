import React , { useContext} from "react";
import "./cart.css";
import { appContext } from './Cart';


const Item = ({id , title , description , price , img , quantity}) => {

  const { rmvItem , inCount , deCount} = useContext(appContext)
 
  


 
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
            <i className="fas fa-plus p-icon" onClick={() =>inCount(id)}></i>
          </div>
          <div className="square">{quantity}</div>
          <div id="div2" className="square">
            <i className="fas fa-minus" onClick={()=> deCount(id)}></i>
          </div>
        </div>
        <div className="rmdiv">
        <div className="square"><i className="fas fa-trash" onClick={()=>{rmvItem(id)}}></i></div>
        </div>
        <div className="pricetab">
            <p><i className="fas fa-rupee-sign"></i>{price}</p>
        </div>
      </div>
      
    </>
  );
};

export default Item;

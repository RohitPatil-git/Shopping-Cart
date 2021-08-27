import React, { createContext , useReducer} from "react";
import "./cart.css";
import { products } from "./Itemsarray";
import Appcart from "./Appcart";
import { reducer } from "./reducer";

export const appContext = createContext();

const initialState = {
  mobile: products,
  totalAmount: 0,
}



const Cart = () => {

//for removing individual item
  const rmvItem = (id) =>{
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }
 
  //for clear cart
const clearCart = () =>{
  return dispatch({
    type : "ClEAR_CART"

  })
}


//for incremnt quantity
const inCount = (id) => {
  return dispatch({
    type : "INC_COUNT",
    payload: id,
  })
}

const deCount = (id) =>{
  return dispatch({
    type : "DEC_COUNT",
    payload : id
  })
}

  
 const [state, dispatch] = useReducer(reducer, initialState)

 

 
  return (
    <>
    <appContext.Provider value={{...state , rmvItem , clearCart , inCount , deCount}}>
      <Appcart/>
      </appContext.Provider>
    </>
  );
};

export default Cart;

export const reducer = (state , action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
          ...state,
          mobile: state.mobile.filter((curElem) => {
            return curElem.id !== action.payload;
          }),
        };
      }
      if(action.type === "ClEAR_CART"){
          return{
              ...state , mobile : []
          }
      }
      if(action.type === "INC_COUNT"){
        const updatedCart = state.mobile.map((curElem) => {
          if (curElem.id === action.payload) {
            return { ...curElem, quantity: curElem.quantity + 1 };
          }

      
          return curElem;
        });
    
        return { ...state, mobile: updatedCart };
      }

      
      if (action.type === "DEC_COUNT") {
        const updatedCart = state.mobile.map((curElem) => {
            if (curElem.id === action.payload) {
              return { ...curElem, quantity: curElem.quantity - 1};
            }
            return curElem;
          })
          .filter((curElem) => curElem.quantity !== 0);
        return { ...state, mobile: updatedCart };
      }
  return state
  }

  
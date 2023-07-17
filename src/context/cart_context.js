import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { useEffect } from "react";

const CartContext = createContext();

const getLocalCartData = ()=>{
  let localCartData = localStorage.getItem('NageshCart');
//   if(localCartData ===[]){
//     return [];

//   }else{
//     return JSON.parse(localCartData);
//   }

const parseData = JSON.parse(localCartData);
if(!Array.isArray(parseData))return[];
return parseData;
};


const initialState = {
  // cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //increment and decrement cart

  const setDecrease = (id)=>{
    dispatch({type:'SET_DECREMENT',payload:id});
  }

  const setIncrease = (id)=>{
    dispatch({type:'SET_INCREMENT',payload:id});
  }



//to remove the indivudal cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };


  //add to clear cart

  const clearCart = ()=>{
    dispatch({type:'CLEAR_CART'})
  };

// add to loacal storage 


useEffect(()=>{
  dispatch({type:"CART_TOTAL_ITEM"});
  dispatch({type:"CART_TOTAL_PRICE"});

  localStorage.setItem('NageshCart',JSON.stringify(state.cart));
},[state.cart])





  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart ,setDecrease,setIncrease}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

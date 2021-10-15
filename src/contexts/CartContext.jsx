import React, { useState, createContext } from "react";

// Create Context Object
export const CartContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const CartContextProvider = props => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = ({ slotId, workerId }) => {
    const itemAlreadyInCart = cartItems.find(item => item.slot_id === slotId && item.worker_id === workerId);

    if(!itemAlreadyInCart) {
      const newCartItems = [...cartItems, { slot_id: slotId, worker_id: workerId }]
      setCartItems(newCartItems);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

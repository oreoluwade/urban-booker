import React, { useState, createContext } from 'react';
import { CartItem } from '../types';

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (...args: any[]) => void;
  removeFromCart: (identifier: number) => void;
};

// Create Context Object
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

// Create a provider for components to consume and subscribe to changes
export const CartContextProvider = (
  props: CartContextProviderProps
): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = ({ slot_id, worker_id }: CartItem) => {
    const itemAlreadyInCart = cartItems.find(
      item => item.slot_id === slot_id && item.worker_id === worker_id
    );

    if (!itemAlreadyInCart) {
      const newCartItems = [...cartItems, { slot_id, worker_id }];
      setCartItems(newCartItems);
    }
  };

  const removeFromCart = (identifier: number) => {
    const remainingItems = [...cartItems].filter((item, index) => {
      return index !== identifier;
    });

    setCartItems(remainingItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

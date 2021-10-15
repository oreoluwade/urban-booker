import React, { useState, createContext } from 'react';
import { CartItemType } from '../types/CartItem';

type CartContextProviderProps = {
  children: React.ReactNode;
};

interface ContextInterface {
  cartItems: CartItemType[];
  addToCart: (...args: any[]) => void;
  removeFromCart: (identifier: number) => void;
}

// Create Context Object
export const CartContext = createContext<ContextInterface | null>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

// Create a provider for components to consume and subscribe to changes
export const CartContextProvider = (
  props: CartContextProviderProps
): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = ({ slot_id, worker_id }: CartItemType) => {
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

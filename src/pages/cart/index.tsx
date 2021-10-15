import React, { useContext } from 'react';
import CartCard from '../../components/cart-card';
import Layout from '../../components/layout';
import { CartContext } from '../../contexts/CartContext';
import { CartItemType } from '../../types/CartItem';
import classes from './Cart.module.scss';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Layout>
      <main className={classes.main}>
        {cartItems.length > 0 ? (
          cartItems.map(
            (item: CartItemType, index: number): JSX.Element => (
              <CartCard
                worker_id={item.worker_id}
                slot_id={item.slot_id}
                key={`item_${item.worker_id}_${item.slot_id}`}
                identifier={index}
              />
            )
          )
        ) : (
          <h2>No items added yet</h2>
        )}
      </main>
    </Layout>
  );
};

export default Cart;

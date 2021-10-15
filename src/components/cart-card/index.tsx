import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import classes from './Cart-Card.module.scss';

type CartCardProps = {
  worker_id: number;
  slot_id: number;
  identifier: number;
};

const CartCard = ({
  worker_id,
  slot_id,
  identifier
}: CartCardProps): JSX.Element => {
  const { removeFromCart } = useContext(CartContext);

  console.log('In cart', worker_id, slot_id);

  return (
    <div className={classes.root}>
      <span>
        <h2>Slot {slot_id}</h2>
        <p>Worker {worker_id}</p>
      </span>

      <button
        className={classes.button__remove}
        title="Remove item"
        onClick={() => {
          removeFromCart(identifier);
        }}
      >
        <span className={classes.line} />
      </button>
    </div>
  );
};

export default CartCard;

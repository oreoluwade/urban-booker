import React, { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '../../contexts/CartContext';
import classes from './Cart-Card.module.scss';
import Spacer from '../spacer';

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

  return (
    <div className={classes.root}>
      <span>
        <h2>Slot {slot_id}</h2>
        <Spacer width={30} />
        <p>Handled by Worker {worker_id}</p>
      </span>

      <button
        className={classes.button}
        title="Remove item"
        onClick={() => {
          removeFromCart(identifier);
        }}
      >
        <Image
          src="/close-white.svg"
          width={24}
          height={24}
          alt="Remove item from basket"
        />
      </button>
    </div>
  );
};

export default CartCard;

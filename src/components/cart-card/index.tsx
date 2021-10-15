import React from 'react';
import classes from './Cart-Card.module.scss';

type CartCardProps = {
  worker_id: number,
  slot_id: number
}

const CartCard = ({ worker_id, slot_id }: CartCardProps): JSX.Element => {
  return (
    <div className={classes.root}>
      <h2>Slot {slot_id}</h2>
      <p>Worker {worker_id}</p>
    </div>
  )
}

export default CartCard

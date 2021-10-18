import React, { useContext } from 'react';
import Image from 'next/image';
import { Worker } from '../../types';
import Rating from '../rating';
import Spacer from '../spacer';
import classes from './Worker-Card.module.scss';
import { CartContext } from '../../contexts/CartContext';

type WorkerProps = {
  worker: Worker;
  slot_id: number;
};

const WorkerCard = ({ worker, slot_id }: WorkerProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={classes.root}>
      <h2>{worker.name}</h2>
      <Spacer width={50} />
      <div className={classes.rating__group}>
        <Rating value={worker.rating} />
        <p>{worker.rating} of 5 stars</p>
      </div>

      <button
        onClick={() => {
          addToCart({ slot_id, worker_id: worker.id });
        }}
        className={classes.cta}
        title="Add to cart"
        data-cy={`worker_${worker.id}`}
      >
        <Image src="/plus.svg" width={32} height={32} alt="Add to cart icon" />
      </button>
    </div>
  );
};

export default WorkerCard;

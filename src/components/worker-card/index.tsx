import React, { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const { addToCart, cartItems } = useContext(CartContext);

  const itemIsInCart = cartItems.find(
    item => item.slot_id === slot_id && item.worker_id === worker.id
  );

  return (
    <article className={classes.root}>
      <h2>{worker.name}</h2>
      <Spacer width={50} />
      <span className={classes.rating__group}>
        <Rating value={worker.rating} />
        <p>{worker.rating} of 5 stars</p>
      </span>

      {!itemIsInCart ? (
        <button
          onClick={() => {
            addToCart({ slot_id, worker_id: worker.id });
            router.push('/cart');
          }}
          className={classes.cta}
          title="Add to cart"
          data-cy={`worker_${worker.id}`}
          aria-label="Add Item Button"
        >
          <Image
            src="/plus.svg"
            width={32}
            height={32}
            alt="Add to cart icon"
          />
        </button>
      ) : (
        <span className={classes.in_cart_badge}>In cart</span>
      )}
    </article>
  );
};

export default WorkerCard;

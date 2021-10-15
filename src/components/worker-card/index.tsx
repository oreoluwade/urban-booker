import React, { useContext } from 'react'
import Image from 'next/image';
import { WorkerType } from '../../types/Worker';
import Rating from '../rating';
import Spacer from '../spacer';
import classes from './Worker-Card.module.scss';
import { CartContext } from '../../contexts/CartContext';

type WorkerProps = {
  worker: WorkerType,
  slotId: number
}

const WorkerCard = ({ worker, slotId }: WorkerProps) => {
  const { addToCart } = useContext(CartContext)

  return (
    <div className={classes.root}>
      <h2>{worker.name}</h2>
      <Spacer width={50} />
      <div className={classes.rating__group}>
        <Rating value={worker.rating} />
        <p>{worker.rating} of 5 stars</p>
      </div>


      <button onClick={() => {
        addToCart({ slotId, workerId: worker.id })
      }} className={classes.cta} title="Add to cart">
        <Image src="/plus.svg" width={32} height={32} alt="Add to cart icon"/>
      </button>
    </div>
  )
}

export default WorkerCard

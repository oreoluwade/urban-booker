import React from 'react'
import Image from 'next/image';
import { WorkerType } from '../../types/Worker';
import Rating from '../rating';
import Spacer from '../spacer';
import classes from './Worker-Card.module.scss';

type WorkerProps = {
  worker: WorkerType
}

const WorkerCard = ({ worker }: WorkerProps) => {
  const addToCart = () => {
    // Context API function to add
  }

  return (
    <div className={classes.root}>
      <h2>{worker.name}</h2>
      <Spacer width={50} />
      <div className={classes.rating__group}>
        <Rating value={worker.rating} />
        <p>{worker.rating} of 5 stars</p>
      </div>


      <button onClick={addToCart} className={classes.cta} title="Add to cart">
        <Image src="/plus.svg" width={32} height={32} alt="Add to cart icon"/>
      </button>
    </div>
  )
}

export default WorkerCard

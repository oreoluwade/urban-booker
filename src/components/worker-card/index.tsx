import React from 'react'
import Rating from '../rating';
import Spacer from '../spacer';
import classes from './Worker-Card.module.scss';

const WorkerCard = ({ worker }) => {
  return (
    <div className={classes.root}>
      <h2>{worker.name}</h2>
      <Spacer width={50} />
      <div className={classes.rating__group}>
        <Rating value={worker.rating} />
        <p>{worker.rating} of 5 stars</p>
      </div>
    </div>
  )
}

export default WorkerCard

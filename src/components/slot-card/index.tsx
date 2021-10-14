import React, { FC } from 'react';
import classes from './Slot-Card.module.scss';

const SlotCard = ({ slot }): JSX.Element => {
  return (
    <a className={classes.root} href={`/slot/${slot.id}`}>
      <h2>Slot {slot.id}</h2>
      <p>{slot.localisedTime}</p>
    </a>
  )
}

export default SlotCard

import React from 'react';
import { SlotType } from '../../types/Slot';
import classes from './Slot-Card.module.scss';

type SlotCardProps = {
  slot: SlotType
}

const SlotCard = ({ slot }: SlotCardProps): JSX.Element => {
  return (
    <a className={classes.root} href={`/slot/${slot.id}`}>
      <h2>Slot {slot.id}</h2>
      <p>{slot.localisedTime}</p>
    </a>
  )
}

export default SlotCard

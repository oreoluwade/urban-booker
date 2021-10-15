import React from 'react';
import Link from 'next/link';
import { SlotType } from '../../types/Slot';
import classes from './Slot-Card.module.scss';

type SlotCardProps = {
  slot: SlotType
}

const SlotCard = ({ slot }: SlotCardProps): JSX.Element => {
  return (
    <Link href={`/slot/${slot.id}`}>
      <a className={classes.root}>
        <h2>Slot {slot.id}</h2>
        <p>{slot.localisedTime}</p>
      </a>
    </Link>
  )
}

export default SlotCard

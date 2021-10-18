import React from 'react';
import Link from 'next/link';
import { Slot } from '../../types';
import classes from './Slot-Card.module.scss';

type SlotCardProps = {
  slot: Slot;
};

const SlotCard = ({ slot }: SlotCardProps): JSX.Element => {
  return (
    <Link href={`/slot/${slot.id}`}>
      <a
        className={classes.root}
        data-testid={`linkfor_slot_${slot.id}`}
        data-cy={`slot_${slot.id}`}
      >
        <h2>Slot {slot.id}</h2>
        <span>
          Time:<p className={classes.time}>{slot.localisedTime}</p>
        </span>

        <span>
          Cost:<p className={classes.price}>{slot.price}</p>
        </span>
      </a>
    </Link>
  );
};

export default SlotCard;

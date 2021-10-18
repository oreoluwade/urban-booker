import React from 'react';
import Link from 'next/link';
import { Slot } from '../../types';
import classes from './Slot-Card.module.scss';
import Spacer from '../spacer';

type SlotCardProps = {
  slot: Slot;
};

const SlotCard = ({ slot }: SlotCardProps): JSX.Element => {
  return (
    <article className={classes.root}>
      <h2>Slot {slot.id}</h2>
      <span>
        Time:<p className={classes.time}>{slot.localisedTime}</p>
        <Spacer width={20} />
        |
        <Spacer width={20} />
        Cost:<p className={classes.price}>{slot.price}</p>
      </span>

      <Spacer height={15} />
      <Link href={`/slot/${slot.id}`}>
        <a
          data-testid={`linkfor_slot_${slot.id}`}
          data-cy={`slot_${slot.id}`}
          className={classes.link}
        >
          View available workers for slot {slot.id}
        </a>
      </Link>
    </article>
  );
};

export default SlotCard;

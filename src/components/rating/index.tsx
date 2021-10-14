import Image from 'next/image';
import classes from './Rating.module.scss';

const Rating = ({ value }) => {
  return (
    <>
      {(!value || value === 0) && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 0 && value <= 0.5 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/half-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 0.5 && value <= 1 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 1 && value <= 1.5 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/half-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}

      {value > 1.5 && value <= 2 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 2 && value <= 2.5 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/half-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 2.5 && value <= 3 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 3 && value <= 3.5 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/half-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 3.5 && value <= 4 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/grey-star.svg" />
        </div>
      )}
      {value > 4 && value <= 4.5 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/half-star.svg" />
        </div>
      )}
      {value > 4.5 && (
        <div className={classes.root}>
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
          <Image alt="star" width={25} height={25} className={classes.star} src="/yellow-star.svg" />
        </div>
      )}
    </>
  );
};

export default Rating;

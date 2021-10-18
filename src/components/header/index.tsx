import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Header.module.scss';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className={classes.root}>
      <Link href="/">
        <a data-cy="home_link">
          <Image alt="home" src="/home-icon.svg" height={32} width={32} />
        </a>
      </Link>

      <Link href="/cart">
        <a className={classes.cart__link} data-cy="cart_link">
          <Image alt="cart" src="/cart-outline.svg" height={32} width={32} />
          {cartItems.length > 0 && (
            <span className={classes.cart__badge}>{cartItems.length}</span>
          )}
        </a>
      </Link>
    </nav>
  );
};

export default Header;

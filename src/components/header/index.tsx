import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Header.module.scss';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className={classes.root}>
      <ul>
        <li>
          <Link href="/">
            <a data-cy="home_link">
              <Image alt="home" src="/home-icon.svg" height={32} width={32} />
            </a>
          </Link>
        </li>

        <li>
          <Link href="/cart">
            <a className={classes.cart__link} data-cy="cart_link">
              <Image
                alt="cart"
                src="/cart-outline.svg"
                height={32}
                width={32}
              />
              {cartItems.length > 0 && (
                <span className={classes.cart__badge}>{cartItems.length}</span>
              )}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

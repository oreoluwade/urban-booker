import React from 'react'
import Image from 'next/image';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <nav className={classes.root}>
      <Image alt="home" src="/home-icon.svg" height={32} width={32} />
      <Image alt="cart" src="/cart-outline.svg" height={32} width={32} />
    </nav>
  )
}

export default Header

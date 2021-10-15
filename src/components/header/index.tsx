import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <nav className={classes.root}>
      <Link href="/">
        <a>
          <Image alt="home" src="/home-icon.svg" height={32} width={32} />
        </a>
      </Link>

      <Link href="/cart">
        <a>
          <Image alt="cart" src="/cart-outline.svg" height={32} width={32} />
        </a>
      </Link>

    </nav>
  )
}

export default Header

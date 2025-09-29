'use client'

import s from './Header.module.scss';
import Link from "next/link";

import {useState} from "react";
import MobileMenu from "@/components/layout/Header/MobileMenu/MobileMenu";


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.header}>
      <nav className={s.nav}>

          <div className={s.logoContainer}>
            <Link href="/">
              <img src="/img/logo_horizontal.svg" alt="logo" className={s.logoImg}/>
            </Link>
            <div className={s.logoText}>
              <div className={s.logoTextShine + ' ' + 'logo-mark-white'} >
                <Link href="/" className={s.navLink}>
                  <span className={s.strong}>Lionshare</span> Ventures
                </Link>
              </div>
            </div>
          </div>



        <div className={s.centralContainer}>
          <Link href="/" className={s.navLink}>Home</Link>
          <Link href="/portfolio" className={s.navLink}>Portfolio</Link>

        </div>
        <div className={s.rightContainer}>
          <Link href="/contacts" className={s.navLink}>Pitch your startup</Link>
        </div>
      </nav>

      <MobileMenu/>
    </header>
  );
};

export default Header;
import s from './Header.module.scss';
import Link from "next/link";

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.logoContainer}>
          <Link href="/">
            <img src="/img/logo_horizontal.svg" alt="logo" className={s.logoImg}/>
          </Link>
          <div className={s.logoText}>
            <Link href="/">
              <span className={s.strong}>Lionshare</span> Ventures
            </Link>
          </div>
        </div>
        <div className={s.centralContainer}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>

        </div>
        <div className={s.rightContainer}>
          <Link href="/contacts">Pitch your startup</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
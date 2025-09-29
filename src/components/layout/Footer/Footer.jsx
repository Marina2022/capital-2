import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="logo-mark">
        <img src="/img/white_logo_horizontal.svg" alt="logo"/>
      </div>
      <div className={s.footerBottom}>Copyright © LIONSHARE VENTURES 2025</div>
    </footer>
  );
};

export default Footer;
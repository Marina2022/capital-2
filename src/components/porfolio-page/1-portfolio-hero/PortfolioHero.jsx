import s from './PortfolioHero.module.scss';

const PortfolioHero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <h1 className={s.mainTitle}>Our portfolio</h1>

        <p className={s.text}>
          Our companies raise faster, grow stronger, and dominate categories. Every portfolio founder is equipped with capital, embedded execution, and a clear path to institutional funding.
        </p>

        <div className={s.getInTouch}>Get In touch</div>

      </div>

    </section>
  );
};

export default PortfolioHero;
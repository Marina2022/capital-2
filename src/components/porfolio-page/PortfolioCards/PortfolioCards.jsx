import s from './PortfolioCards.module.scss';
import {portfolioCardsData} from "@/consts";

const PortfolioCards = () => {
  return (
    <section className={s.portfolio}>

      <div className={s.portfolioContainer}>

        <ul className={s.portfolioList}>
          {
            portfolioCardsData.map((slide, i) => (
              <li key={i} className={s.slide} style={{backgroundImage: `url(/img/portfolioItems/${slide.img})`}}>
                <div className={s.innerBlock}>
                  <div className={s.cardCat}>
                    {slide.category}
                  </div>

                  <div className={s.cardTitle}>
                    {slide.title}
                  </div>
                </div>
              </li>
            ))
          }
        </ul>

      </div>

    </section>
  );
};

export default PortfolioCards;
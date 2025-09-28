import s from './PortfolioCards.module.scss';
import {portfolioCardsData} from "@/consts";

const PortfolioCards = () => {
  return (
    <section className={s.portfolio}>

      <div className={s.portfolioContainer}>

        <ul className={s.portfolioList}>
          {
            portfolioCardsData.map((card, i) => (
              <li key={i} className={s.slide + ' ' + 'hover-lift'} style={{backgroundImage: `url(/img/portfolioItems/${card.img})`}}>
                <div className={s.innerBlock}>
                  <div className={s.cardCat}>
                    {card.category}
                  </div>
                  <div className={s.cardTitle}>
                    {card.title}
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
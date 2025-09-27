import s from './MetricCard.module.scss';

const MetricsCard = ({card}) => {
  return (
    <div className={s.metricsCard}>
      <div className={s.top}>
        <span className={s.number}>
          {card.number}
          {
            card.plus ? '+' : ''
          }

        </span>
        <span className={s.entity}>{card.entity}</span>
      </div>

      <div className={s.bottomText}>{card.bottomText}</div>

    </div>
  );
};

export default MetricsCard;
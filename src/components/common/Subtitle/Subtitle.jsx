import s from './Subtitle.module.scss';


const Subtitle = ({title}) => {
  return (
    <div className={s.headerTag}>
      <div className={s.circle}></div>
      <span className={s.tagText}>{title}</span>
    </div>
  );
};

export default Subtitle;
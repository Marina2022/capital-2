import s from './Approach.module.scss';
import Subtitle from "@/components/common/Subtitle/Subtitle";
import AccordionItem from "@/components/home-page/4-approach/AccordionItem/AccordionItem";
import {approachData} from "@/consts";

const Approach = () => {
  return (
    <section className={s.approach}>
      <div className="container">
        <Subtitle title="Approach"/>

        <h2 className={s.sectionTitle}>Our approach</h2>

        <ul className={s.list}>
          {
            approachData.map((item, index) => <AccordionItem key={index} item={item}/>)
          }

        </ul>
      </div>
    </section>
  );
};

export default Approach;

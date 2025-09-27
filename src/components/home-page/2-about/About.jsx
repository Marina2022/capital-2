import s from './About.module.scss';
import Link from "next/link";
import {metricCardsData} from "@/consts";
import MetricsCard from "@/components/home-page/2-about/MetricCard/MetricsCard";
import Subtitle from "@/components/common/Subtitle/Subtitle";

const About = () => {
  return (
    <section className={s.about}>
      <div className="container">
        <div className={s.headerBlock}>

          <div className={s.headerTagBlock}>
            <Subtitle title={"About us"} />
          </div>

          <div className={s.headerText}>We partner with founders who combine vision with relentless execution.</div>
        </div>
        <div className={s.centered}>
          <div className={s.tagTextUnderlined}>About us</div>
        </div>

        <div className={s.metricsCards}>
          {
            metricCardsData.map((item, index) => (
              <MetricsCard card={item} key={index}/>
            ))
          }

          <div className={s.becomeNext}>
            <p className={s.becomeText}>
              Become the next company
            </p>

            <Link href="/contacts" className={s.tagTextUnderlinedWhite}>
              Pitch your Startup
            </Link>
          </div>
        </div>

      </div>


    </section>
  );
};

export default About;
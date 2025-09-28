'use client'

import s from './investments.module.scss';
import Subtitle from "@/components/common/Subtitle/Subtitle";
import {investmentSlider} from "@/consts";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {useEffect, useRef, useState} from "react";


const Investments = () => {

  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const swiperRef = useRef(null);

  const updateOffset = () => {
    if (containerRef.current) {

      const windowWidth = window.innerWidth;
      if (windowWidth > 990) {
        setOffset(containerRef.current.getBoundingClientRect().left);
      } else if (windowWidth > 668) {
        setOffset(20);
      } else {
        setOffset(0);
      }
    }
  }

  useEffect(() => {
    updateOffset(); // сразу при монтировании

    window.addEventListener('resize', updateOffset); // на ресайз
    return () => window.removeEventListener('resize', updateOffset);
  }, []);


  return (
    <section className={s.investments + ' ' + 'reveal'}>
      <div className="container" ref={containerRef}>

        <Subtitle title={'Investments'}/>
        <h2 className={s.mainTitle}>Industries we invest&nbsp;in</h2>

        <div className={s.sliderButtons}>
          <button className="hover-nudge"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5895 1.63672L1.77656 13.8673L14.5895 26.0978M2.94138 13.8673H33.2266" stroke="#090909"
                    strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </button>
          <button className="hover-nudge"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4105 1.63672L32.2234 13.8673L19.4105 26.0978M31.0586 13.8673H0.773438" stroke="#090909"
                    strokeWidth="1.5" strokeLinecap="square"/>
            </svg>
          </button>
        </div>

        <div className={s.sliderWrapper}>
          <Swiper

            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              668: {
                slidesPerView: 1,
              },
              990: {
                slidesPerView: 2,
              },
              1746: {
                slidesPerView: 2,
              }
            }}

            spaceBetween={0}
            centeredSlides={false}
            slidesOffsetAfter={offset}
            freeMode={true}
            direction="horizontal"
            onSwiper={(swiper) => (swiperRef.current = swiper)}

            className={s.swiper}
          >
            {
              investmentSlider.map((slide, i) => (
                <SwiperSlide className={s.outerBlock} key={i}>
                  <div className={s.slide + ' ' + 'hover-lift'}>
                    <div className={s.innerBlock}>
                      <img className={s.icon} src={slide.iconUrl} alt="icon"/>
                      <div className={s.cardTitle}>
                        {slide.title}
                      </div>
                      <p className={s.cardText}>{slide.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>


      </div>

    </section>
  );
};

export default Investments;
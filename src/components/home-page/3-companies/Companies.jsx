'use client'

import s from './Companies.module.scss';
import Subtitle from "@/components/common/Subtitle/Subtitle";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {useEffect, useRef, useState} from "react";
import {portfolioCardsData} from "@/consts";

const Companies = () => {

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
    <section className={s.companies + ' ' + 'reveal'}>
      <div className="container" ref={containerRef}>
        <Subtitle title="Companies"/>
        <div className={s.headerBottom}>
          <h2 className={s.title}>The companies we believe&nbsp;in</h2>
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
        </div>
      </div>

      <div className={s.swiperWrapper}>
        <Swiper

          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            668: {
              slidesPerView: 2.2,
            },
            990: {
              slidesPerView: 3.2,
            },
            1746: {
              slidesPerView: 3.9,
            }
          }}

          spaceBetween={0}
          centeredSlides={false}
          slidesOffsetBefore={offset}
          slidesOffsetAfter={offset}
          freeMode={true}
          direction="horizontal"
          onSwiper={(swiper) => (swiperRef.current = swiper)}

          className={s.swiper}
        >
          {
            portfolioCardsData.map((slide, i) => (
              <SwiperSlide className={s.outerBlock} key={i}>
                <div className={s.slide + ' ' + 'hover-lift'}
                     style={{backgroundImage: `url(/img/portfolioItems/${slide.img})`}}>
                  <div className={s.innerBlock}>
                    <div className={s.cardCat}>
                      {slide.category}
                    </div>

                    <div className={s.cardTitle}>
                      {slide.title}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Companies;
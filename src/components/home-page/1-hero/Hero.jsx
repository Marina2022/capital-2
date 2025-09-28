
'use client'; // если Next.js 13+ (app router)

import {useEffect, useRef} from 'react';
import s from './Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
  const heroImgRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!heroImgRef.current) return;
      const y = Math.min(600, window.scrollY) * 0.1;
      heroImgRef.current.style.transform = `translateY(${y}px) scale(1.02)`;
    }

    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={s.hero}>
      <div ref={heroImgRef} className={s.heroImg}></div>

      <div className={s.heroGradient}></div>
      <div className={s.bottomGradient}></div>

      <div className={s.heroContainer}>
        <div className={s.mainContent}>
          <h1 className={s.mainTitle}>Empowering the next generation of startups</h1>

          <div className={s.links}>
            <Link href="/contacts">Pitch your startup</Link>
            <Link href="/portfolio">Portfolio</Link>
          </div>

          <p className={s.text}>
            Lionshare Ventures is Southeast Asia’s premier selective venture builder.
            We back only the top 5% of founders with capital and embedded operational
            support, driving 3x faster growth through hands-on execution.
          </p>
        </div>
      </div>

      <div className={s.bottomPart}>
        <div className={s.companiesContainer}>
          <div className={s.companies}>
            <img src="/img/hero-companies/comp1.svg" alt=""/>
            <img src="/img/hero-companies/comp2.svg" alt=""/>
            <img src="/img/hero-companies/comp3.svg" alt=""/>
            <img src="/img/hero-companies/comp4.svg" alt=""/>
            <img src="/img/hero-companies/comp5.svg" alt=""/>
            <img src="/img/hero-companies/comp6.svg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

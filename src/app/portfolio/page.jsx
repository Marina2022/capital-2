'use client'

import React, {useEffect} from 'react';
import PortfolioCards from "@/components/porfolio-page/PortfolioCards/PortfolioCards";
import PortfolioHero from "@/components/porfolio-page/1-portfolio-hero/PortfolioHero";

const Page = () => {

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main >
      <PortfolioHero/>
      <PortfolioCards/>
    </main>
  )
}

export default Page;
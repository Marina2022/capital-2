import React from 'react';
import PortfolioCards from "@/components/porfolio-page/PortfolioCards/PortfolioCards";
import PortfolioHero from "@/components/porfolio-page/1-portfolio-hero/PortfolioHero";

const Page = () => {

  return (
    <main >
      <PortfolioHero/>
      <PortfolioCards/>
    </main>
  )
}

export default Page;
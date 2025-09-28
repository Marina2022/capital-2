'use client'

import Hero from "@/components/home-page/1-hero/Hero";
import About from "@/components/home-page/2-about/About";
import Companies from "@/components/home-page/3-companies/Companies";
import Approach from "@/components/home-page/4-approach/Approach";
import Investments from "@/components/home-page/5-investments/Investments";
import {useEffect} from "react";

export default function Home() {

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
  <main>
    <Hero />
    <About />
    <Companies />
    <Approach/>
    <Investments />
  </main>
  );
}

import Hero from "@/components/home-page/1-hero/Hero";
import About from "@/components/home-page/2-about/About";
import Companies from "@/components/home-page/3-companies/Companies";
import Approach from "@/components/home-page/4-approach/Approach";
import Investments from "@/components/home-page/5-investments/Investments";

export default function Home() {
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

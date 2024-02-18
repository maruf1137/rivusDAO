import Hero from "@/components/hero";
import Networks from "@/components/networks";
import Works from "@/components/works";
import RivusDAO from "@/components/rivusDAO";
import System from "@/components/ecoSystem";
import Partners from "@/components/partners";
import Stake from "@/components/stake";
import Community from "@/components/community";
import Audits from "@/components/audits";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Networks />
      <Works />
      <RivusDAO />
      <System />
      <Audits />
      <Partners />
      <Stake />
      <Community />
    </main>
  );
}

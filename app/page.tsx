import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import WhyRegularize from "./components/WhyRegularize";
import About from "./components/About";
import Services from "./components/Services";
import Audience from "./components/Audience";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Social from "./components/Social";
import FAQ from "./components/FAQ";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WhyRegularize />
        <About />
        <Services />
        <Audience />
        <Process />
        <Stats />
        <Social />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

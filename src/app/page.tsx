import { CallToAction } from "@/components/CallToAction";
import { FAQs } from "@/components/FAQs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricingdemo";



export default function Home() {
  return (
    <>
    <div className="overflow-x-hidden">
      
      <Navbar />
      <Hero />
      <LogoTicker />
      
      <Features />
      
      
      <FAQs />
      <Pricing/>
     
      <CallToAction />
      </div>
      <Footer />
    </>
  );
}

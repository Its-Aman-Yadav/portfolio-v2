import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import TestimonialCard from "@/components/TestimonialCard";
import HomeProjects from "@/components/HomeProjects";
import WorkEx from "@/components/WorkEx";
import Greet from "@/components/Greet";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.0.2]">
      <HeroSection /> 
      <Skills />
      <WorkEx />
      <TestimonialCard />
      <HomeProjects />
      <Greet />
      <Footer/>
      
    </main>
  );
}

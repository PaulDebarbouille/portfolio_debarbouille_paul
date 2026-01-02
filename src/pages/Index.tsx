import Hero from "@/components/portfolio/Hero";
import ImpactAtAGlance from "@/components/portfolio/ImpactAtAGlance";
import Methodology from "@/components/portfolio/Methodology";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import Toolkit from "@/components/portfolio/Toolkit";
import ClosingCTA from "@/components/portfolio/ClosingCTA";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactAtAGlance />
      <Methodology />
      <ProjectsGrid />
      <Toolkit />
      <ClosingCTA />
      <Contact />
    </main>
  );
};

export default Index;

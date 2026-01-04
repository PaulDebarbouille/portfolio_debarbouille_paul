import Hero from "@/components/portfolio/Hero";
import ImpactAtAGlance from "@/components/portfolio/ImpactAtAGlance";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import Toolkit from "@/components/portfolio/Toolkit";
import ClosingCTA from "@/components/portfolio/ClosingCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ImpactAtAGlance />
      <ProjectsGrid />
      <Toolkit />
      <ClosingCTA />
    </main>
  );
};

export default Index;

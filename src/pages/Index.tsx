import Hero from "@/components/portfolio/Hero";
import KeyAchievements from "@/components/portfolio/KeyAchievements";
import Methodology from "@/components/portfolio/Methodology";
import ProjectsGrid from "@/components/portfolio/ProjectsGrid";
import LeadershipPrinciples from "@/components/portfolio/LeadershipPrinciples";
import Toolkit from "@/components/portfolio/Toolkit";
import ImpactSummary from "@/components/portfolio/ImpactSummary";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <KeyAchievements />
      <Methodology />
      <ProjectsGrid />
      <LeadershipPrinciples />
      <Toolkit />
      <ImpactSummary />
      <Contact />
    </main>
  );
};

export default Index;

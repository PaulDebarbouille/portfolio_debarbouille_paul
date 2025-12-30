import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center aws-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="aws-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="aws-badge text-sm">
              Business Analyst Intern – AWS
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-up stagger-1 text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
            [Votre Nom]
          </h1>

          {/* Tagline */}
          <p className="animate-fade-up stagger-2 text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Completed <span className="text-accent font-semibold">12 data-driven projects</span> across multiple enterprises, 
            winning <span className="text-accent font-semibold">8 of them</span> and achieving 
            <span className="text-accent font-semibold"> top academic performance</span> (major de promo), 
            delivering insights, leading teams, and driving business impact.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg"
            >
              Voir mes Use Cases
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger mon CV
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-up stagger-4 pt-12">
            <button 
              onClick={scrollToProjects}
              className="text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Scroll to content"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

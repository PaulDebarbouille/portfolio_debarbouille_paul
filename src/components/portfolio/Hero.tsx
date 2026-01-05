import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToImpact = () => {
    document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" });
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
              Operational Business Analyst Intern
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-up stagger-1 text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
            Paul DEBARBOUILLE
          </h1>

          {/* Spike Statement */}
          <p className="animate-fade-up stagger-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/90 leading-tight">
            I worked for{" "}
            <span className="text-accent">10 companies</span>{" "}
            before turning 20.
          </p>

          {/* Subtitle / Context */}
          <p className="animate-fade-up stagger-3 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Delivered 12 business deep dives, led cross-functional teams, 
            and pitched insights to C-level executives.
          </p>

          {/* CTA Button - Centered */}
          <div className="animate-fade-up stagger-4 flex justify-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToImpact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg"
            >
              Discover My Impact
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

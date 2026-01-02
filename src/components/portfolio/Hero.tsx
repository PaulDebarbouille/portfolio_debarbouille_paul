import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

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
              Business Analyst Intern – AWS
            </span>
          </div>

          {/* Spike Statement */}
          <h1 className="animate-fade-up stagger-1 text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            I'm the guy who worked for{" "}
            <span className="text-accent">10 companies</span>{" "}
            before turning 20.
          </h1>

          {/* Subtitle / Context */}
          <p className="animate-fade-up stagger-2 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Delivered 12 business deep dives, led cross-functional teams, 
            and pitched insights to C-level executives.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToImpact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg"
            >
              Discover My Impact
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-up stagger-4 pt-12">
            <button 
              onClick={scrollToImpact}
              className="group flex flex-col items-center text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Scroll to content"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
              <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                Scroll down to discover my impact
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

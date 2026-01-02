import { ArrowDown } from "lucide-react";

const ClosingCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="closing" className="aws-section aws-gradient">
      <div className="aws-container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-relaxed">
            After delivering impactful results for{" "}
            <span className="text-accent font-bold">10 companies</span> before turning 20, 
            it would be a pleasure to make the{" "}
            <span className="text-accent font-bold">11th one yours</span>.
          </p>

          {/* Navigation Arrow */}
          <div className="flex flex-col items-center mt-12">
            <button
              onClick={scrollToContact}
              className="group flex flex-col items-center text-primary-foreground/60 hover:text-accent transition-colors"
              aria-label="Scroll to contact"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
              <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                Get in touch
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;

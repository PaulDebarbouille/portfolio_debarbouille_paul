import { 
  Users, 
  Target, 
  Search, 
  Scale, 
  Rocket,
  ArrowDown
} from "lucide-react";

const steps = [
  {
    icon: Users,
    number: "01",
    title: "Start from the Customer",
    description: "Comprendre les besoins réels et les pain points du client pour orienter l'analyse.",
  },
  {
    icon: Target,
    number: "02",
    title: "Define the Business Metric",
    description: "Identifier la métrique clé qui mesure le succès et guide les décisions.",
  },
  {
    icon: Search,
    number: "03",
    title: "Dive Deep into the Data",
    description: "Explorer, nettoyer et analyser les données pour révéler des insights actionnables.",
  },
  {
    icon: Scale,
    number: "04",
    title: "Make Trade-offs & Decisions",
    description: "Évaluer les options, quantifier les impacts et recommander la meilleure solution.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Deliver and Iterate",
    description: "Implémenter, mesurer les résultats et améliorer continuellement.",
  },
];

const Methodology = () => {
  const scrollToNext = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="methodology" className="aws-section bg-background">
      <div className="aws-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How I Think
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ma méthodologie d'analyse orientée impact business
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className={`methodology-step animate-fade-up stagger-${index + 1}`}
                >
                  {/* Step number with icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg relative z-10">
                      <Icon className="h-9 w-9 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="flex flex-col items-center pt-12">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
            aria-label="Scroll to projects"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
            <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              Explore my use cases
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

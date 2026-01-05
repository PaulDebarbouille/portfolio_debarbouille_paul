import { ArrowDown } from "lucide-react";

const metrics = [
  {
    number: "12",
    title: "C-Level Pitches",
    micro: "Presented insights to executives*",
    theme: "bdd",
  },
  {
    number: "8",
    title: "BDD Project Wins",
    micro: "Top performance in cohort*",
    theme: "bdd",
  },
  {
    number: "12",
    title: "Team Leadership Roles",
    micro: "Led cross-functional teams of 3 end-to-end*",
    theme: "bdd",
  },
  {
    number: "10",
    title: "Enterprises Served",
    micro: "Delivered analyses across diverse industries*",
    theme: "bdd",
  },
  {
    number: "1",
    title: "Professional Internship",
    micro: "Business Analyst Online D2C (Group SEB)",
    theme: "internship",
  },
  {
    number: "#1",
    title: "Academic Ranking",
    micro: "Ranked #1 academically*",
    theme: "academic",
  },
];

const themeColors = {
  bdd: "border-[#232F3E] hover:border-[#1a2330]",
  academic: "border-[#9CA3AF] hover:border-[#6B7280]",
  internship: "border-[#F59E0B] hover:border-[#D97706]",
};

const ImpactAtAGlance = () => {
  const scrollToNext = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="impact" className="py-12 md:py-16 bg-background">
      <div className="aws-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Impact at a Glance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Metrics that summarize my approach to ownership, execution, and continuous learning.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`animate-fade-up p-6 rounded-xl bg-card border-[3px] ${themeColors[metric.theme as keyof typeof themeColors]} transition-all duration-300 hover:shadow-lg`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <span className="text-4xl md:text-5xl font-bold text-accent block mb-2">
                    {metric.number}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {metric.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {metric.micro}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Asterisk Explanation */}
          <p className="text-sm text-muted-foreground italic text-center max-w-3xl mx-auto mb-4">
            *Business Deep Dives (BDD) are 3-week intensive projects organized by the school in collaboration with enterprises. Teams rotate, perform quantitative analyses, develop actionable strategies, and present insights to C-level executives. Each metric above relates to these BDD projects unless specified otherwise.
          </p>

          {/* Navigation Arrow - More visible */}
          <div className="flex flex-col items-center pt-2">
            <button
              onClick={scrollToNext}
              className="group flex flex-col items-center text-accent/70 hover:text-accent transition-colors"
              aria-label="Scroll to next section"
            >
              <ArrowDown className="h-8 w-8 animate-bounce" />
              <span className="text-sm mt-2 text-muted-foreground group-hover:text-accent transition-colors hidden md:block">
                Explore my use cases
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAtAGlance;

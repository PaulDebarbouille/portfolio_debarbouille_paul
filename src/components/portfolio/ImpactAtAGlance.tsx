import { ArrowDown } from "lucide-react";

const metrics = [
  {
    number: "12",
    title: "Team Leadership Roles",
    micro: "Led cross-functional teams end-to-end*",
  },
  {
    number: "8",
    title: "BDD Projects Wins",
    micro: "Achieved #1 results in cohort*",
  },
  {
    number: "12",
    title: "C-Level Pitches",
    micro: "Presented insights to executives*",
  },
  {
    number: "10",
    title: "Enterprises Served",
    micro: "Delivered analyses across diverse industries*",
  },
  {
    number: "#1",
    title: "Academic Ranking",
    micro: "Ranked #1 academically*",
  },
  {
    number: "1",
    title: "Professional Internship",
    micro: "Applied skills in real-world corporate environment*",
  },
];

const ImpactAtAGlance = () => {
  const scrollToNext = () => {
    document.getElementById("methodology")?.scrollIntoView({ behavior: "smooth" });
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
                className="animate-fade-up p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
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
                Discover how I think
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAtAGlance;

import { TrendingUp, Target, Award } from "lucide-react";

const ImpactSummary = () => {
  return (
    <section className="aws-section aws-gradient">
      <div className="aws-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Impact & Metrics
          </h2>

          {/* Main Statement */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-12">
            Across <span className="text-accent font-semibold">12 projects</span> and 
            <span className="text-accent font-semibold"> one internship</span>, delivered actionable insights, 
            led teams, and drove measurable impact in 
            <span className="text-accent font-semibold"> 8 winning projects</span>, 
            consistently applying metrics-driven decision making.
          </p>

          {/* Summary KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <TrendingUp className="h-10 w-10 text-accent mb-4" />
              <span className="text-4xl font-bold text-primary-foreground mb-2">100%</span>
              <span className="text-primary-foreground/70 text-sm">Delivery Rate</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <Award className="h-10 w-10 text-accent mb-4" />
              <span className="text-4xl font-bold text-primary-foreground mb-2">67%</span>
              <span className="text-primary-foreground/70 text-sm">Win Rate (8/12)</span>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <Target className="h-10 w-10 text-accent mb-4" />
              <span className="text-4xl font-bold text-primary-foreground mb-2">13</span>
              <span className="text-primary-foreground/70 text-sm">Enterprises Impacted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSummary;

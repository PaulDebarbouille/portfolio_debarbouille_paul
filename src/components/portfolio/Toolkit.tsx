import { 
  Database, 
  BarChart3, 
  MessageSquare,
  FileSpreadsheet,
  Code,
  PieChart,
  Presentation,
  FileText,
  ArrowDown
} from "lucide-react";

const categories = [
  {
    title: "Revenue & Pricing Operations",
    description: "Optimizing revenue growth and monetization",
    icon: BarChart3,
    skills: [
      { name: "SQL", icon: Database },
      { name: "Python", icon: Code },
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Pricing Models", icon: BarChart3 },
      { name: "Revenue Forecasting", icon: PieChart },
      { name: "LTV/CAC Analysis", icon: BarChart3 },
      { name: "A/B Testing", icon: PieChart },
      { name: "Dynamic Pricing", icon: BarChart3 },
      { name: "Elasticity Analysis", icon: PieChart },
    ],
  },
  {
    title: "Product & GTM Operations",
    description: "Supporting product launches and go-to-market strategy",
    icon: Presentation,
    skills: [
      { name: "Market Sizing (TAM/SAM/SOM)", icon: PieChart },
      { name: "Competitive Intelligence", icon: BarChart3 },
      { name: "GTM Strategy", icon: Presentation },
      { name: "Product Analytics", icon: PieChart },
      { name: "KPI Frameworks", icon: BarChart3 },
      { name: "Roadmap Planning", icon: FileText },
      { name: "Launch Execution", icon: Presentation },
    ],
  },
  {
    title: "Data & Analytics Engineering",
    description: "Building insights from complex datasets",
    icon: Database,
    skills: [
      { name: "SQL (Advanced)", icon: Database },
      { name: "Python (Pandas, NumPy)", icon: Code },
      { name: "BigQuery", icon: Database },
      { name: "Excel (Power Query, VBA)", icon: FileSpreadsheet },
      { name: "QlikSense", icon: PieChart },
      { name: "Google Analytics", icon: BarChart3 },
      { name: "Data Visualization", icon: PieChart },
      { name: "ETL/Data Pipelines", icon: Database },
    ],
  },
  {
    title: "Business Strategy & Financial Modeling",
    description: "Creating business cases and strategic recommendations",
    icon: FileText,
    skills: [
      { name: "Financial Modeling (NPV, IRR, ROI)", icon: BarChart3 },
      { name: "Business Cases", icon: FileText },
      { name: "Scenario Analysis", icon: PieChart },
      { name: "Cost-Benefit Analysis", icon: BarChart3 },
      { name: "Sensitivity Analysis", icon: PieChart },
      { name: "Strategic Frameworks", icon: FileText },
      { name: "Market Expansion Strategy", icon: Presentation },
    ],
  },
  {
    title: "Communication & Executive Alignment",
    description: "Translating data into actionable business recommendations",
    icon: MessageSquare,
    skills: [
      { name: "Executive Presentations", icon: Presentation },
      { name: "Data Storytelling", icon: FileText },
      { name: "Stakeholder Management", icon: MessageSquare },
      { name: "Dashboard Design (Tableau)", icon: PieChart },
      { name: "Visual Design", icon: PieChart },
      { name: "Cross-Functional Collaboration", icon: MessageSquare },
    ],
  },
];

const Toolkit = () => {
  const scrollToNext = () => {
    document.getElementById("closing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="toolkit" className="aws-section bg-secondary/30">
      <div className="aws-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Toolkit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and skills organized by business use
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={category.title}
                className={`aws-card p-8 animate-fade-up stagger-${index + 1}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <CategoryIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span key={skill.name} className="skill-tag">
                        <SkillIcon className="h-4 w-4" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrow */}
        <div className="flex flex-col items-center pt-12">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
            aria-label="Scroll to closing"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;

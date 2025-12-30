import { 
  Database, 
  BarChart3, 
  MessageSquare,
  FileSpreadsheet,
  Code,
  PieChart,
  Presentation,
  FileText
} from "lucide-react";

const categories = [
  {
    title: "Data Analysis",
    description: "Exploration et analyse des données",
    icon: Database,
    skills: [
      { name: "Excel Avancé", icon: FileSpreadsheet },
      { name: "SQL", icon: Database },
      { name: "Python", icon: Code },
      { name: "Data Cleaning", icon: BarChart3 },
    ],
  },
  {
    title: "Decision Support",
    description: "Aide à la prise de décision",
    icon: BarChart3,
    skills: [
      { name: "Dashboards", icon: PieChart },
      { name: "KPI Frameworks", icon: BarChart3 },
      { name: "Business Cases", icon: FileText },
      { name: "ROI Analysis", icon: BarChart3 },
    ],
  },
  {
    title: "Communication",
    description: "Présentation et storytelling",
    icon: MessageSquare,
    skills: [
      { name: "Executive Summaries", icon: FileText },
      { name: "Data Storytelling", icon: Presentation },
      { name: "Stakeholder Mgmt", icon: MessageSquare },
      { name: "Visual Design", icon: PieChart },
    ],
  },
];

const Toolkit = () => {
  return (
    <section className="aws-section bg-secondary/30">
      <div className="aws-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Toolkit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Outils et compétences organisés par usage business
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
      </div>
    </section>
  );
};

export default Toolkit;

import { 
  FolderKanban, 
  Trophy, 
  Briefcase, 
  Presentation, 
  Users, 
  GraduationCap 
} from "lucide-react";

const achievements = [
  {
    icon: FolderKanban,
    number: "12",
    label: "Projects",
    description: "Delivered insights and recommendations across diverse enterprises",
  },
  {
    icon: Trophy,
    number: "8",
    label: "Project Wins",
    description: "1st place in 8/12 projects, demonstrating excellence and impact",
  },
  {
    icon: Briefcase,
    number: "1",
    label: "Professional Internship",
    description: "Applied analytical skills in a corporate environment",
  },
  {
    icon: Presentation,
    number: "12",
    label: "Presentations",
    description: "Communicated findings to stakeholders",
  },
  {
    icon: Users,
    number: "12",
    label: "Leadership Weeks",
    description: "Led teams during intensive 3-week projects",
  },
  {
    icon: GraduationCap,
    number: "1st",
    label: "Academic Rank",
    description: "Major de promotion, demonstrating strong learning ability",
  },
];

const KeyAchievements = () => {
  return (
    <section className="aws-section bg-secondary/30">
      <div className="aws-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Métriques personnelles démontrant mon parcours et mes résultats
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={achievement.label}
                className={`kpi-card animate-fade-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <div className="kpi-number mb-2">{achievement.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.label}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;

import { 
  Heart, 
  Shield, 
  Search, 
  CheckCircle2, 
  Lightbulb, 
  Handshake 
} from "lucide-react";

const principles = [
  {
    icon: Heart,
    name: "Customer Obsession",
    description: "Commencer par le client et travailler à rebours",
    projectCount: 12,
  },
  {
    icon: Shield,
    name: "Ownership",
    description: "Penser long terme et agir au nom de l'entreprise",
    projectCount: 12,
  },
  {
    icon: Search,
    name: "Dive Deep",
    description: "Rester connecté aux détails et auditer fréquemment",
    projectCount: 10,
  },
  {
    icon: CheckCircle2,
    name: "Deliver Results",
    description: "Livrer les résultats attendus avec qualité",
    projectCount: 8,
  },
  {
    icon: Lightbulb,
    name: "Think Big",
    description: "Créer et communiquer une direction audacieuse",
    projectCount: 6,
  },
  {
    icon: Handshake,
    name: "Earn Trust",
    description: "Écouter attentivement, parler franchement",
    projectCount: 12,
  },
];

const LeadershipPrinciples = () => {
  return (
    <section className="aws-section bg-background">
      <div className="aws-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leadership Principles in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comment j'incarne les principes de leadership AWS dans mes projets
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div 
                key={principle.name}
                className={`principle-card animate-fade-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {principle.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-accent">{principle.projectCount}</span>
                  <span className="text-sm text-muted-foreground">projets</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipPrinciples;

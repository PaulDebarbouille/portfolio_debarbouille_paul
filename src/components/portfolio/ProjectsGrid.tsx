import { useState } from "react";
import { Trophy, Briefcase, Building2, ArrowDown } from "lucide-react";
import { projects, Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const getSectorIcon = (sector: string) => {
  return Building2;
};

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const primaryProjects = projects.filter((p) => p.isPrimary);
  const secondaryProjects = projects.filter((p) => !p.isPrimary);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const scrollToNext = () => {
    document.getElementById("toolkit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="aws-section bg-background">
      <div className="aws-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Use Cases
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            6 projets principaux + 7 projets secondaires — Cliquez sur chaque carte pour découvrir le détail STAR
          </p>
        </div>

        {/* Primary Projects Grid - 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {primaryProjects.map((project, index) => {
            const SectorIcon = getSectorIcon(project.sector);
            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="project-card p-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Badges */}
                <div className="flex gap-2">
                  {project.isWinner && (
                    <div className="winner-badge flex items-center gap-1">
                      <Trophy className="h-3 w-3" />
                      Winner
                    </div>
                  )}
                  {project.isInternship && (
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                      <Briefcase className="h-3 w-3" />
                      Stage
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Logo + Company */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <SectorIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {project.sector}
                      </span>
                      <h3 className="text-sm font-semibold text-accent leading-tight">
                        {project.company}
                      </h3>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-semibold text-foreground leading-tight">
                    {project.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tools Preview */}
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Projects - Clean List */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            Autres projets
          </h3>
          <div className="space-y-3">
            {secondaryProjects.map((project, index) => {
              const SectorIcon = getSectorIcon(project.sector);
              return (
                <div
                  key={project.id}
                  className="bg-secondary/30 rounded-xl border border-border/50 p-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  {/* Header: Logo, Company, Sector, Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <SectorIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-base font-semibold text-foreground">
                        {project.company}
                      </span>
                      <span className="text-xs text-muted-foreground px-2 py-0.5 bg-secondary rounded">
                        {project.sector}
                      </span>
                    </div>
                    {project.isWinner && (
                      <div className="winner-badge flex items-center gap-1 ml-auto">
                        <Trophy className="h-3 w-3" />
                        Winner
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-medium text-foreground/90 mb-2">
                    {project.title}
                  </h4>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground/70 text-xs uppercase tracking-wide">Données</span>
                      <p className="text-muted-foreground">{project.data || project.sector}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground/70 text-xs uppercase tracking-wide">Mission</span>
                      <p className="text-muted-foreground">{project.mission || "Analyse"}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground/70 text-xs uppercase tracking-wide">Résultat</span>
                      <p className="text-accent font-medium">{project.result || "Résultat"}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="flex flex-col items-center pt-8">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
            aria-label="Scroll to toolkit"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
            <span className="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              Discover my toolkit
            </span>
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
};

export default ProjectsGrid;

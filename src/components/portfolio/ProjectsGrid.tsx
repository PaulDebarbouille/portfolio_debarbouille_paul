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
            Key Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            5 projets principaux + 7 projets secondaires — Cliquez sur chaque carte pour découvrir le détail STAR
          </p>
        </div>

        {/* Primary Projects Grid - 5 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {primaryProjects.slice(0, 5).map((project, index) => {
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

                  {/* Result in Orange */}
                  <p className="text-sm">
                    <span className="text-muted-foreground">Result: </span>
                    <span className="text-primary font-medium">{project.result}</span>
                  </p>

                  {/* Tools Preview */}
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Projects - Detailed List */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            Autres projets
          </h3>
          <div className="space-y-2">
            {secondaryProjects.map((project) => {
              const SectorIcon = getSectorIcon(project.sector);
              return (
                <div
                  key={project.id}
                  className="bg-secondary/30 rounded-lg border border-border/50 p-3 relative"
                >
                  {/* Winner Badge - Top Right */}
                  {project.isWinner && (
                    <div className="absolute top-2 right-2 winner-badge flex items-center gap-1 text-xs">
                      <Trophy className="h-3 w-3" />
                      Winner
                    </div>
                  )}

                  {/* Row 1: Company - Title (Date) */}
                  <div className="flex items-center gap-2 flex-wrap mb-2 pr-16">
                    <span className="text-sm font-semibold text-foreground">
                      {project.company}
                    </span>
                    <span className="text-muted-foreground">–</span>
                    <span className="text-sm text-foreground/80">
                      {project.title}
                    </span>
                    {project.date && (
                      <span className="text-xs text-muted-foreground">
                        ({project.date})
                      </span>
                    )}
                  </div>

                  {/* Row 2: Logo | Sector | Data | Mission | Result */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                    <div className="w-5 h-5 rounded bg-secondary flex items-center justify-center flex-shrink-0">
                      <SectorIcon className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <span className="text-border">|</span>
                    <span>{project.sector}</span>
                    <span className="text-border">|</span>
                    <span>{project.data}</span>
                    {project.mission && (
                      <>
                        <span className="text-border">|</span>
                        <span>{project.mission}</span>
                      </>
                    )}
                    {project.result && (
                      <>
                        <span className="text-border">|</span>
                        <span className="text-primary font-medium">{project.result}</span>
                      </>
                    )}
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

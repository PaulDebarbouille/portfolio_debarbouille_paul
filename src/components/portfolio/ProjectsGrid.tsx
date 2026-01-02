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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Use Cases
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            12 projets + 1 stage — Cliquez sur chaque carte pour découvrir le détail STAR
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const SectorIcon = getSectorIcon(project.sector);
            return (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`project-card p-5 animate-fade-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Winner Badge */}
                {project.isWinner && (
                  <div className="winner-badge flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    Winner
                  </div>
                )}

                {/* Internship Badge */}
                {project.isInternship && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-bold bg-primary text-primary-foreground flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    Stage
                  </div>
                )}

                {/* Content */}
                <div className="space-y-4">
                  {/* Sector Icon */}
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <SectorIcon className="h-6 w-6 text-muted-foreground" />
                  </div>

                  {/* Company */}
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {project.sector}
                    </span>
                    <h3 className="text-sm font-semibold text-accent mt-0.5">
                      {project.company}
                    </h3>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-foreground leading-tight">
                    {project.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tools Preview */}
                  <div className="flex flex-wrap gap-1.5">
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

        {/* Navigation Arrow */}
        <div className="flex flex-col items-center pt-12">
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

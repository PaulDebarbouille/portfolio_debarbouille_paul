import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Trophy, 
  Briefcase, 
  Target, 
  Zap, 
  TrendingUp,
  Wrench,
  Shield
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh]">
          <div className="p-6">
            {/* Header */}
            <DialogHeader className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.sector}
                    </Badge>
                    {project.isWinner && (
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        <Trophy className="h-3 w-3 mr-1" />
                        Winner
                      </Badge>
                    )}
                    {project.isInternship && (
                      <Badge variant="outline" className="text-xs border-accent text-accent">
                        <Briefcase className="h-3 w-3 mr-1" />
                        Internship
                      </Badge>
                    )}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-muted-foreground mt-1">
                    {project.company}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <Separator className="my-6" />

            {/* STAR Format */}
            <div className="space-y-6">
              {/* Situation */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Target className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Situation</h3>
                </div>
                <p className="text-muted-foreground pl-10 leading-relaxed">
                  {project.situation}
                </p>
              </div>

              {/* Task */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Task</h3>
                </div>
                <p className="text-muted-foreground pl-10 leading-relaxed">
                  {project.task}
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Wrench className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Actions</h3>
                </div>
                <ul className="space-y-2 pl-10">
                  {project.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Results</h3>
                </div>
                <ul className="space-y-2 pl-10">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Tools & Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tools Used */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-semibold text-foreground">Outils utilisés</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="skill-tag text-xs">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Leadership Principles */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <h4 className="font-semibold text-foreground">Leadership Principles</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.principles.map((principle) => (
                    <Badge key={principle} variant="outline" className="text-xs">
                      {principle}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

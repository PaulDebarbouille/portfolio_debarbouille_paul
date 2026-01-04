import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Project } from "@/data/projects";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  // If project has an HTML card path, display it in an iframe
  if (project.htmlCardPath) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
          <iframe
            src={project.htmlCardPath}
            className="w-full h-[85vh] border-0"
            title={project.title}
          />
        </DialogContent>
      </Dialog>
    );
  }

  // Fallback to default STAR format for projects without HTML cards
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
        <div className="p-6 overflow-y-auto max-h-[90vh]">
          <div className="text-center py-12 text-muted-foreground">
            <p>Contenu détaillé à venir pour ce projet.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

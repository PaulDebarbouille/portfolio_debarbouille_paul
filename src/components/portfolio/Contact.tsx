import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="aws-section bg-secondary/30">
      <div className="aws-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            CV & Contact
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Intéressé par mon profil ? Téléchargez mon CV ou contactez-moi directement.
          </p>

          {/* Download CV Button */}
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-6 text-lg mb-12"
          >
            <Download className="mr-2 h-5 w-5" />
            Télécharger mon CV
          </Button>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:votre.email@example.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>votre.email@example.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/votre-profil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/votre-profil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="aws-container">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 [Votre Nom] — Portfolio Business Analyst
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

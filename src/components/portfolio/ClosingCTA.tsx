import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section id="closing" className="aws-section aws-gradient">
      <div className="aws-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA Phrase */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground leading-relaxed mb-12">
            <span className="text-accent font-bold">10 companies before 20</span>{" "}
            — now, let the first one after 20 be yours.
          </p>

          {/* CV Download */}
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-6 text-lg mb-10"
          >
            <Download className="mr-2 h-5 w-5" />
            Télécharger mon CV
          </Button>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:votre.email@example.com" 
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>votre.email@example.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/votre-profil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/votre-profil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-primary-foreground/20">
        <div className="aws-container">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2024 Paul DEBARBOUILLE — Portfolio Business Analyst
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ClosingCTA;

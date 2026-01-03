import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
const ClosingCTA = () => {
  return <section id="closing" className="min-h-screen flex flex-col items-center justify-center aws-gradient">
      <div className="aws-container">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-12">
          {/* Main CTA Phrase - Split into two lines */}
          <div className="space-y-6">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-sans">
              <span className="text-accent">10 companies before 20</span>
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/80 italic font-light leading-relaxed font-sans"> et the first one after 20 be yours.</p>
          </div>

          {/* CTA Buttons - Centered with spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Télécharger mon CV
            </Button>
          </div>

          {/* Contact Links - Centered */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <a href="mailto:votre.email@example.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-lg">
              <Mail className="h-5 w-5" />
              <span>pauldebarbouille@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/votre-profil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-lg">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/votre-profil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-lg">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-6">
        <div className="aws-container">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2024 Paul DEBARBOUILLE — Portfolio Business Analyst
          </p>
        </div>
      </footer>
    </section>;
};
export default ClosingCTA;
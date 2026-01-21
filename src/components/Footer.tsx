import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&lt;</span>
            Designed & Built by Alex Chen
            <span className="text-primary"> /&gt;</span>
          </div>

          <a
            href="https://github.com/alexchen/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Github size={16} />
            <span className="font-mono">View Source</span>
          </a>
        </div>

        <div className="mt-4 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} • Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

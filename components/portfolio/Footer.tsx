import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/superAman07/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aman-vishwakarma-dev/" },
  { icon: Twitter, href: "https://x.com/superAman_7" },
  { icon: Instagram, href: "https://www.instagram.com/iamsuperaman/" },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <span className="text-xl font-display font-bold text-text-primary">
              AV<span className="text-accent">.</span>
            </span>
            <p className="text-text-muted text-xs font-mono mt-2">
              Designing chaos into pixel-perfect clarity.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted text-xs font-mono uppercase tracking-wider hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-end gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border hover:border-accent flex items-center justify-center transition-all group"
                aria-label="Social link"
              >
                <s.icon size={14} className="text-text-muted group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            © {new Date().getFullYear()} Aman Vishwakarma. All rights reserved.
          </p>
          <p className="text-text-muted text-xs font-mono">
            Designed & Built with <span className="text-accent">❤</span> and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
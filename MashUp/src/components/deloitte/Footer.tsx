import { Leaf, Mail, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "Home", value: "home" },
      { label: "Content Hub", value: "content" },
      { label: "Search", value: "search" },
      { label: "AI Assistant", value: "chat" },
    ],
    resources: [
      { label: "About", value: "about" },
      { label: "FAQ", value: "about" },
      { label: "Guidelines", value: "about" },
      { label: "Contact", value: "about" },
    ],
    legal: [
      { label: "Privacy Policy", value: "about" },
      { label: "Terms of Service", value: "about" },
      { label: "Accessibility", value: "about" },
      { label: "Cookie Policy", value: "about" },
    ],
  };

  return (
    <footer className="w-full border-t bg-muted/30 mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold">Sustainability Hub</div>
                <div className="text-sm text-muted-foreground">By Deloitte</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering Deloitte employees with AI-powered sustainability insights and resources.
            </p>
            <div className="flex gap-3">
              <button
                className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </button>
              <button
                className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                className="w-9 h-9 rounded-lg bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <nav className="flex flex-col gap-2" aria-label="Platform links">
              {footerLinks.platform.map((link) => (
                <button
                  key={link.value}
                  onClick={() => onNavigate(link.value)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <nav className="flex flex-col gap-2" aria-label="Resource links">
              {footerLinks.resources.map((link) => (
                <button
                  key={link.label}
                  onClick={() => onNavigate(link.value)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <nav className="flex flex-col gap-2" aria-label="Legal links">
              {footerLinks.legal.map((link) => (
                <button
                  key={link.label}
                  onClick={() => onNavigate(link.value)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Deloitte. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care for our planet 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}

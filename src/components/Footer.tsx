import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Approach", href: "#approach" },
      { label: "Leadership", href: "#leadership" },
      { label: "Careers", href: "#" },
    ],
    services: [
      { label: "Wealth Management", href: "#services" },
      { label: "Investment Planning", href: "#services" },
      { label: "Insurance Solutions", href: "#services" },
      { label: "Retirement Planning", href: "#services" },
    ],
    resources: [
      { label: "Latest News", href: "#news" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Regulatory", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              MoneyTree Wealth
            </h3>
            <p className="text-foreground/70 mb-6 max-w-sm">
              Smart investment solutions. Your trusted partner in financial success since 2020.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@moneytreewealth.co.in" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@moneytreewealth.co.in</span>
              </a>
              <div className="flex items-start gap-2 text-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Finance Street, Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-t border-border">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-secondary/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
            >
              <Facebook className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
            >
              <Twitter className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary/50 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
            >
              <Instagram className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
            {footerLinks.legal.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-border">
          <p className="text-foreground/60 text-sm">
            © {currentYear} MoneyTree Wealth. All rights reserved. | SEBI Registered Investment Advisor
          </p>
          <p className="text-foreground/50 text-xs mt-2">
            Investments are subject to market risks. Please read all scheme related documents carefully before investing.
          </p>
          <p className="text-foreground/40 text-xs mt-4">
            Website designed and developed by{" "}
            <a 
              href="https://www.ulmind.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:text-primary/80 transition-colors underline-offset-2 hover:underline"
            >
              ULMiND
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

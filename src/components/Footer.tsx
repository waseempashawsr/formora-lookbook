import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Collections", href: "#collections" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Formora<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Premium bespoke uniforms for hospitality and healthcare industries. Elevating brands through exceptional design and quality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-elegant"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-elegant"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Collections</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="hover:text-accent transition-smooth cursor-pointer">Front Desk</li>
              <li className="hover:text-accent transition-smooth cursor-pointer">Restaurant & F&B</li>
              <li className="hover:text-accent transition-smooth cursor-pointer">Housekeeping</li>
              <li className="hover:text-accent transition-smooth cursor-pointer">Hospital & Medical</li>
              <li className="hover:text-accent transition-smooth cursor-pointer">Resort & Spa</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Phone className="h-5 w-5 mt-0.5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 mt-0.5 text-accent" />
                <span>info@formorauniforms.com</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <span>123 Fashion District<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Formora Uniforms. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

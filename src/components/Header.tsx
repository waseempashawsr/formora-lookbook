import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Collections", 
      href: "#collections",
      submenu: [
        { name: "Front Desk", href: "/collections/front-desk" },
        { name: "Restaurant & F&B", href: "/collections/restaurant" },
        { name: "Housekeeping", href: "/collections/housekeeping" },
        { name: "Doorman & Valet", href: "/collections/doorman-valet" },
        { name: "Resort & Poolside", href: "/collections/resort-poolside" },
        { name: "Spa", href: "/collections/spa" },
        { name: "Hospital & Medical", href: "/collections/hospital-medical" },
        { name: "Shirts & Blouses", href: "/collections/shirts-blouses" },
        { name: "Trousers & Skirts", href: "/collections/trousers-skirts" },
        { name: "Aprons & Accessories", href: "/collections/aprons-accessories" },
      ]
    },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Clients", href: "#clients" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-primary cursor-pointer">
                Formora<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                    >
                      {link.name}
                    </a>
                    <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                      <div className="bg-background border border-border rounded-md shadow-elegant min-w-[220px] py-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-smooth"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="default">
              Contact
            </Button>
            <Button variant="hero" size="default">
              Request Quote
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-smooth"
                    >
                      {link.name}
                    </a>
                    {link.submenu && (
                      <div className="flex flex-col gap-3 mt-3 ml-4">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            to={sublink.href}
                            className="text-sm text-foreground/80 hover:text-accent transition-smooth"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="ghost" size="lg" className="w-full">
                    Contact
                  </Button>
                  <Button variant="hero" size="lg" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

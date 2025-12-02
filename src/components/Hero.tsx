import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury professional uniforms for hospitality"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in text-balance">
            Luxury Professional Uniforms for Hospitality & Healthcare
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-in font-light leading-relaxed">
            Bespoke uniforms that elevate your brand identity and empower your team with comfort and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button variant="hero" size="xl" className="group">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="premium" size="xl">
              View Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

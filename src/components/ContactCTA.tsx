import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-navy-light to-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Create Your Custom Uniform Collection?
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Let's discuss how we can bring your vision to life with premium, bespoke uniforms that elevate your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="premium"
              size="xl"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

import { Palette, Users, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Work with our design team to create unique uniforms that perfectly match your brand identity.",
  },
  {
    icon: Users,
    title: "Semi-Custom Options",
    description: "Select from our curated collection and customize with your choice of fabrics, colors, and details.",
  },
  {
    icon: Package,
    title: "Contract Manufacturing",
    description: "Partner with us for private label production and bulk manufacturing with consistent quality.",
  },
];

const Atelier = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Uniform Atelier
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            From concept to sampling to production — designers and brands can collaborate with us on every step of the journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-elegant p-8 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Atelier;

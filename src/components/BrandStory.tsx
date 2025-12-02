import { Check } from "lucide-react";

const benefits = [
  "Custom-made to order",
  "All sizes available",
  "Pattern storage for repeat orders",
  "Low minimum order flexibility",
];

const BrandStory = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Where Style Meets Function
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Formora Uniforms, we combine thoughtful design, professional tailoring, and durable materials to create premium uniforms that represent your brand with pride.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every uniform is made to measure with customizable fabrics, colors, trims, and embroidery branding. We understand that your team's appearance is a reflection of your commitment to excellence.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/10 p-1 mt-1">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-lg text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-primary to-navy-light shadow-elegant overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="text-6xl font-bold mb-4">25+</div>
                  <div className="text-xl font-light">Years of Excellence</div>
                  <div className="mt-8 text-4xl font-bold mb-2">500+</div>
                  <div className="text-lg font-light">Satisfied Clients</div>
                  <div className="mt-8 text-4xl font-bold mb-2">50K+</div>
                  <div className="text-lg font-light">Uniforms Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

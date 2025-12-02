import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Formora Uniforms transformed our brand identity. The quality and attention to detail in every piece is exceptional. Our staff feels confident and professional.",
    author: "Sarah Martinez",
    role: "General Manager",
    company: "Grand Luxe Hotel",
  },
  {
    quote: "Working with Formora was seamless from design to delivery. They understood our vision and created uniforms that perfectly represent our upscale dining experience.",
    author: "James Chen",
    role: "Executive Chef",
    company: "Stellar Restaurant Group",
  },
  {
    quote: "The comfort and durability of our medical uniforms have exceeded expectations. Formora delivers premium quality while maintaining practical functionality for our healthcare team.",
    author: "Dr. Emily Roberts",
    role: "Chief Medical Officer",
    company: "Metropolitan Health Center",
  },
];

const Testimonials = () => {
  return (
    <section id="clients" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading hospitality and healthcare organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="p-8 hover:shadow-elegant transition-elegant animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-accent font-medium mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

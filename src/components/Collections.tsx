import { Card } from "@/components/ui/card";
import frontDeskImage from "@/assets/collection-frontdesk.jpg";
import restaurantImage from "@/assets/collection-restaurant.jpg";
import medicalImage from "@/assets/collection-medical.jpg";
import resortImage from "@/assets/collection-resort.jpg";
import housekeepingImage from "@/assets/collection-housekeeping.jpg";

const collections = [
  {
    title: "Front Desk Collection",
    description: "First impressions with elegance.",
    image: frontDeskImage,
  },
  {
    title: "Restaurant & F&B",
    description: "Style and performance in motion.",
    image: restaurantImage,
  },
  {
    title: "Hospital & Medical",
    description: "Comfort, hygiene & modern aesthetics.",
    image: medicalImage,
  },
  {
    title: "Resort & Spa Wear",
    description: "Relaxed luxury with functional detailing.",
    image: resortImage,
  },
  {
    title: "Housekeeping",
    description: "Practical and polished everyday style.",
    image: housekeepingImage,
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meticulously crafted uniforms for every department, designed to reflect your brand's excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {collections.map((collection, index) => (
            <Card
              key={collection.title}
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-elegant cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-elegant" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-primary-foreground/90 font-light">{collection.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;

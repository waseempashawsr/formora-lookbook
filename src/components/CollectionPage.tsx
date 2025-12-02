import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { CollectionData } from "@/types/collections";
import { useState } from "react";

interface CollectionPageProps {
  collection: CollectionData;
}

const CollectionPage = ({ collection }: CollectionPageProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Header Banner */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img
          src={collection.bannerImage}
          alt={collection.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
              {collection.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="sticky top-24 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <Button variant="hero" size="lg" className="shadow-elegant">
            Request a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in">
            {collection.introduction}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
            {collection.products.map((product, index) => (
              <Card
                key={product.styleCode}
                className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-elegant cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProduct(product.styleCode)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-accent mb-2">{product.styleCode}</p>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-16" />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-navy-light to-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Customize Your Uniform Collection?
            </h2>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Let's discuss how we can bring your vision to life with premium, bespoke uniforms.
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
    </div>
  );
};

export default CollectionPage;

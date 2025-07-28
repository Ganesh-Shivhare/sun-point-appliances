import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit M.",
      text: "One of the best appliance stores in Ahmedabad! Great selection and service.",
      rating: 5
    },
    {
      name: "Falguni D.", 
      text: "Bought a chimney and gas stove set. Quality is top-notch and they helped with quick installation.",
      rating: 5
    },
    {
      name: "Asif B.",
      text: "Honest pricing and genuine brands. Highly recommend for kitchenware shopping.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(circle at 20% 80%, hsl(var(--brand-orange) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--brand-red) / 0.3) 0%, transparent 50%)'
      }}></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-4">What Our Customers Say</h2>
            <div className="h-2 w-48 mx-auto rounded-full animate-gradient" style={{ background: 'var(--gradient-brand)' }}></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="floating-card group border-2 hover:border-brand-orange/40 transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10" style={{ background: 'var(--gradient-brand)' }}></div>
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="mb-6">
                  <Quote className="h-12 w-12 mb-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{ color: 'hsl(var(--brand-orange))' }} />
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-brand-orange/20">
                  <div className="font-bold text-xl gradient-text">
                    – {testimonial.name}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange animate-pulse-glow" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl relative overflow-hidden" style={{ background: 'var(--gradient-mesh)' }}>
            <div className="relative z-10">
              <p className="text-2xl font-bold gradient-text mb-2">Join Thousands of Happy Customers!</p>
              <p className="text-lg text-muted-foreground">Experience the Sunpoint difference today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
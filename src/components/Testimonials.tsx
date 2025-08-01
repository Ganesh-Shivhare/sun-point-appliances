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
    <section id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">What Our Customers Say</h2>
          <div className="w-32 h-1.5 gradient-brand mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-foreground">
                    – {testimonial.name}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
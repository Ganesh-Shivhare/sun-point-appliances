import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Wrench } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Genuine Products with Warranty",
      description: "100% authentic products from trusted Indian brands"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Years of Experience",
      description: "Trusted by thousands of happy households"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Guidance",
      description: "Professional in-store consultation and support"
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "Complete Service",
      description: "Doorstep delivery, installation & after-sales support"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 gradient-accent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gradient">About Us</h2>
          <div className="w-32 h-1.5 gradient-brand mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At <span className="text-primary font-semibold">Sun Point Appliances (AKBARALLYS)</span>, we bring you a curated range of the most 
              reliable and affordable home appliances and kitchenware from top Indian brands. With years 
              of experience in retail and customer service, we've built a name trusted by thousands of 
              happy households.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the latest in smart cooking to essential everyday tools, we offer products that bring 
              convenience, style, and performance into your home — all with genuine warranties and 
              great after-sales support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover-lift gradient-card border-0 shadow-elegant">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-primary/10 rounded-full">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
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
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Sunpoint Appliances (AKBARALLYS), we bring you a curated range of the most 
              reliable and affordable home appliances and kitchenware from top Indian brands. 
              With years of experience in retail and customer service, we've built a name 
              trusted by thousands of happy households.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the latest in smart cooking to essential everyday tools, we offer products 
              that bring convenience, style, and performance into your home — all with genuine 
              warranties and great after-sales support.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="mb-3 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
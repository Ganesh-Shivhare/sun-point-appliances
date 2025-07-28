import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Wrench } from "lucide-react";
import React from "react";

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
    <section className="py-24 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-mesh)' }}>
      {/* Animated Background */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-10 animate-float" style={{ background: 'var(--gradient-glow)' }}></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-15 animate-bounce-slow" style={{ background: 'var(--gradient-glow)' }}></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-4">About Us</h2>
            <div className="h-2 w-32 mx-auto rounded-full animate-gradient" style={{ background: 'var(--gradient-brand)' }}></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl border-2 border-brand-orange/20 floating-card">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At <span className="gradient-text font-bold">Sunpoint Appliances (AKBARALLYS)</span>, we bring you a curated range of the most 
                reliable and affordable home appliances and kitchenware from top Indian brands. 
                With years of experience in retail and customer service, we've built a name 
                trusted by <span className="gradient-text font-bold">thousands of happy households</span>.
              </p>
            </div>
            <div className="p-8 rounded-3xl border-2 border-brand-orange/20 floating-card">
              <p className="text-xl text-muted-foreground leading-relaxed">
                From the latest in <span className="gradient-text font-bold">smart cooking</span> to essential everyday tools, we offer products 
                that bring convenience, style, and performance into your home — all with genuine 
                warranties and great after-sales support.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 floating-card group border-2 hover:border-brand-orange/40 transition-all duration-500 transform hover:scale-105">
                <CardContent className="pt-6">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300" 
                         style={{ background: 'var(--gradient-brand)' }}>
                      {React.cloneElement(feature.icon, { className: "h-8 w-8 text-white" })}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg gradient-text mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
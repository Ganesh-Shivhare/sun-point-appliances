import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-24 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo and Main Content */}
          <div className="w-full text-center">
            <div className="mb-8 fade-in">
              <img 
                src="/app_logo.png"
                alt="Sun Point Appliances Logo" 
                className="h-40 mx-auto mb-6 drop-shadow-lg hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight fade-in">
              Welcome to <span className="text-gradient">Sun Point Appliances</span>
              <span className="block text-3xl lg:text-4xl text-secondary font-extrabold mt-2">(AKBARALLYS)</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed fade-in">
              Your Trusted Home Appliance Partner. One-stop destination for quality kitchenware 
              and home appliances at <span className="text-primary font-semibold">unbeatable prices</span>. 
              Serving Ahmedabad and beyond with leading Indian brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
              <Button size="lg" className="text-lg px-10 py-4 shadow-glow hover-lift">
                <Phone className="mr-3 h-6 w-6" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 hover-lift border-2">
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
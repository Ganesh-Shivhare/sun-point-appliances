import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Logo and Main Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/6b9133c6-3ae4-47e4-aa11-996f1c6b2841.png" 
                alt="Sunpoint Appliances Logo" 
                className="h-32 mx-auto lg:mx-0 mb-6"
              />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Welcome to Sunpoint Appliances
              <span className="block text-secondary font-extrabold">(AKBARALLYS)</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Your Trusted Home Appliance Partner. One-stop destination for quality kitchenware 
              and home appliances at unbeatable prices. Serving Ahmedabad and beyond with leading Indian brands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
          
          {/* Contact Info Card */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">Visit Our Store</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunpoint Appliances (AKBARALLYS)</p>
                  <p className="text-sm text-muted-foreground">
                    15 Sakar VII Nehru Bridge Corner, Ashram Rd, 
                    opposite Patang Hotel, Ahmedabad, Gujarat 380009
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-medium">+91 79 2658 0157</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--gradient-mesh)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full animate-float" style={{ background: 'var(--gradient-glow)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full animate-bounce-slow" style={{ background: 'var(--gradient-glow)' }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Logo and Main Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-12 relative">
              <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-50" style={{ background: 'var(--gradient-glow)' }}></div>
              <img 
                src="/lovable-uploads/6b9133c6-3ae4-47e4-aa11-996f1c6b2841.png" 
                alt="Sunpoint Appliances Logo" 
                className="h-40 mx-auto lg:mx-0 mb-8 relative z-10 animate-float"
              />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
              <span className="block text-foreground animate-gradient bg-gradient-to-r from-brand-orange via-brand-red to-brand-orange bg-clip-text text-transparent">
                Welcome to Sunpoint
              </span>
              <span className="block text-4xl lg:text-5xl gradient-text font-extrabold mt-2">
                Appliances (AKBARALLYS)
              </span>
            </h1>
            
            <div className="relative mb-10">
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Your <span className="gradient-text font-bold">Trusted Home Appliance Partner</span>. 
                One-stop destination for quality kitchenware and home appliances at unbeatable prices. 
                <span className="block mt-2 font-semibold">Serving Ahmedabad and beyond with leading Indian brands.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="text-xl px-10 py-4 glow-effect transform hover:scale-105 transition-all duration-300" style={{ background: 'var(--gradient-brand)' }}>
                <Phone className="mr-3 h-6 w-6" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-10 py-4 border-2 border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="mr-3 h-6 w-6" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
          
          {/* Contact Info Card */}
          <div className="floating-card bg-card/90 backdrop-blur-xl p-10 rounded-3xl border-2 border-brand-orange/20 max-w-lg w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">Visit Our Store</h3>
              <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-brand)' }}></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-brand-orange/5 to-brand-red/5">
                <div className="p-2 rounded-full" style={{ background: 'var(--gradient-brand)' }}>
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg">Sunpoint Appliances (AKBARALLYS)</p>
                  <p className="text-muted-foreground leading-relaxed">
                    15 Sakar VII Nehru Bridge Corner, Ashram Rd, 
                    opposite Patang Hotel, Ahmedabad, Gujarat 380009
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-brand-orange/5 to-brand-red/5">
                <div className="p-2 rounded-full" style={{ background: 'var(--gradient-brand)' }}>
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl">+91 79 2658 0157</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20" style={{ background: 'linear-gradient(to top, var(--background), transparent)' }}></div>
    </section>
  );
};

export default Hero;
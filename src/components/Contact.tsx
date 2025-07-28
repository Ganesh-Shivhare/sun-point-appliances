import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }}></div>
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-20 animate-float" style={{ background: 'var(--gradient-glow)' }}></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-15 animate-bounce-slow" style={{ background: 'var(--gradient-glow)' }}></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-4">Get in Touch</h2>
            <div className="h-2 w-40 mx-auto rounded-full animate-gradient" style={{ background: 'var(--gradient-brand)' }}></div>
          </div>
          <p className="text-2xl text-muted-foreground font-medium">
            Visit us today or contact us for <span className="gradient-text font-bold">expert advice and great deals!</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="floating-card border-2 border-brand-orange/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ background: 'var(--gradient-brand)' }}></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <div className="p-3 rounded-2xl" style={{ background: 'var(--gradient-brand)' }}>
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <span className="gradient-text">Store Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <span className="font-bold gradient-text">Sunpoint Appliances (AKBARALLYS)</span><br />
                  15 Sakar VII Nehru Bridge Corner,<br />
                  Ashram Rd, opposite Patang Hotel,<br />
                  Ahmedabad, Gujarat 380009
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="floating-card border-2 border-brand-orange/30 group hover:border-brand-orange/50 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'var(--gradient-brand)' }}>
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-xl gradient-text">Call Us</span>
                  </div>
                  <p className="text-lg text-muted-foreground font-semibold">+91 79 2658 0157</p>
                </CardContent>
              </Card>

              <Card className="floating-card border-2 border-brand-orange/30 group hover:border-brand-orange/50 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: 'var(--gradient-brand)' }}>
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-xl gradient-text">Email</span>
                  </div>
                  <p className="text-lg text-muted-foreground">info@sunpointappliances.in</p>
                </CardContent>
              </Card>
            </div>

            <Card className="floating-card border-2 border-brand-orange/30">
              <CardContent className="pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl" style={{ background: 'var(--gradient-brand)' }}>
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-xl gradient-text">Store Hours</span>
                </div>
                <div className="space-y-2 text-lg text-muted-foreground">
                  <p><span className="font-semibold">Monday - Saturday:</span> 10:00 AM - 8:00 PM</p>
                  <p><span className="font-semibold">Sunday:</span> 11:00 AM - 7:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            <Card className="floating-card border-2 border-brand-orange/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ background: 'var(--gradient-sunset)' }}></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl gradient-text text-center">Quick Contact</CardTitle>
                <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-brand)' }}></div>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <Button className="w-full justify-start text-xl py-4 glow-effect transform hover:scale-105 transition-all duration-300" size="lg" style={{ background: 'var(--gradient-brand)' }}>
                  <Phone className="mr-4 h-6 w-6" />
                  Call Now: +91 79 2658 0157
                </Button>
                <Button variant="outline" className="w-full justify-start text-xl py-4 border-2 border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-105" size="lg">
                  <MessageCircle className="mr-4 h-6 w-6" />
                  WhatsApp Chat
                </Button>
                <Button variant="outline" className="w-full justify-start text-xl py-4 border-2 border-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-105" size="lg">
                  <Mail className="mr-4 h-6 w-6" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="floating-card border-2 border-brand-orange/30">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text text-center">Follow Us</CardTitle>
                <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'var(--gradient-brand)' }}></div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6 justify-center mb-6">
                  <Button variant="outline" size="lg" className="border-2 border-brand-orange/50 hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-110 px-6">
                    <Facebook className="h-6 w-6 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-brand-orange/50 hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-110 px-6">
                    <Instagram className="h-6 w-6 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-brand-orange/50 hover:bg-brand-orange hover:text-white transition-all duration-300 transform hover:scale-110 px-6">
                    <MapPin className="h-6 w-6 mr-2" />
                    Maps
                  </Button>
                </div>
                <p className="text-lg text-muted-foreground text-center">
                  Stay updated with our <span className="gradient-text font-bold">latest offers</span> and new arrivals!
                </p>
              </CardContent>
            </Card>

            <Card className="floating-card relative overflow-hidden" style={{ background: 'var(--gradient-brand)' }}>
              <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-glow)' }}></div>
              <CardContent className="pt-8 relative z-10">
                <h3 className="font-bold text-2xl mb-6 text-white text-center">Why Choose Sunpoint Appliances?</h3>
                <ul className="space-y-3 text-lg text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Genuine Products with Warranty</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Competitive Prices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Expert In-Store Guidance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Doorstep Delivery & Installation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Excellent After-Sales Support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
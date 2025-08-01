import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Visit us today or contact us for expert advice and great deals!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Store Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Sunpoint Appliances (AKBARALLYS)<br />
                  15 Sakar VII Nehru Bridge Corner,<br />
                  Ashram Rd, opposite Patang Hotel,<br />
                  Ahmedabad, Gujarat 380009
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Call Us</span>
                  </div>
                  <p className="text-muted-foreground">+91 79 2658 0157</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Email</span>
                  </div>
                  <p className="text-muted-foreground">info@sunpointappliances.in</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Store Hours</span>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 7:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" size="lg">
                  <Phone className="mr-3 h-5 w-5" />
                  Call Now: +91 79 2658 0157
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <MessageCircle className="mr-3 h-5 w-5" />
                  WhatsApp Chat
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Mail className="mr-3 h-5 w-5" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <MapPin className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Stay updated with our latest offers and new arrivals!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Why Choose Sunpoint Appliances?</h3>
                <ul className="space-y-1 text-sm opacity-90">
                  <li>✓ Genuine Products with Warranty</li>
                  <li>✓ Competitive Prices</li>
                  <li>✓ Expert In-Store Guidance</li>
                  <li>✓ Doorstep Delivery & Installation</li>
                  <li>✓ Excellent After-Sales Support</li>
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
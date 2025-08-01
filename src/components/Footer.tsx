import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock, Star } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/6b9133c6-3ae4-47e4-aa11-996f1c6b2841.png" 
                alt="Sunpoint Appliances Logo" 
                className="h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">SunPoint Appliances</h3>
                <p className="text-sm text-gray-300">(AKBARALLYS)</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for quality home appliances and kitchenware. 
              Serving Ahmedabad with leading Indian brands at unbeatable prices.
            </p>
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <span className="text-white ml-2">Trusted by 1000+ customers</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary transition-colors duration-200 text-left w-full">About Us</button></li>
              <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-primary transition-colors duration-200 text-left w-full">Our Products</button></li>
              <li><button onClick={() => scrollToSection('brands')} className="text-gray-300 hover:text-primary transition-colors duration-200 text-left w-full">Brands We Deal</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-primary transition-colors duration-200 text-left w-full">Customer Reviews</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary transition-colors duration-200 text-left w-full">Contact Us</button></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Warranty & Service</a></li>
            </ul>
          </div>

          {/* Product Categories Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-primary">Product Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Kitchen Appliances</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Home Essentials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Tableware & Kitchenware</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Mixer Grinders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Gas Stoves & Chimneys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Air Coolers & Fans</a></li>
            </ul>
          </div>

          {/* Contact & Store Info Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-primary">Contact & Store Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Shop No. 123, Main Market<br />
                    Near Railway Station<br />
                    Ahmedabad, Gujarat 380001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-primary transition-colors duration-200">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-gray-400">Call us anytime</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="mailto:info@sunpointappliances.com" className="text-gray-300 hover:text-primary transition-colors duration-200">
                    info@sunpointappliances.com
                  </a>
                  <p className="text-xs text-gray-400">Email us</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors duration-200">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © 2024 SunPoint Appliances (AKBARALLYS). All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                GST No: 24ABCDE1234F1Z5 | PAN: ABCDE1234F
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
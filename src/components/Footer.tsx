import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock, Star, MessageCircle, ExternalLink, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/app_logo.png" 
                alt="Sun Point Appliances Logo" 
                className="h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">Sun Point Appliances</h3>
                <p className="text-sm text-gray-300">(AKBARALLYS)</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for quality home appliances and kitchenware. 
              Serving Ahmedabad with leading Indian brands at unbeatable prices.
            </p>
          </div>



          {/* Product Categories Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-primary">Product Categories</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Kitchen Appliances</li>
              <li className="text-gray-300">Home Essentials</li>
              <li className="text-gray-300">Tableware & Kitchenware</li>
              <li className="text-gray-300">Mixer Grinders</li>
              <li className="text-gray-300">Gas Stoves & Chimneys</li>
              <li className="text-gray-300">Air Coolers & Fans</li>
            </ul>
          </div>

          {/* Contact & Store Info Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-primary">Contact & Store Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="https://maps.google.com/?q=Sun+Point+Appliances,+15+Sakar+VII+Nehru+Bridge+Corner,+Ashram+Rd,+opposite+Patang+Hotel,+Ahmedabad,+Gujarat+380009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm leading-relaxed"
                  >
                    Sun Point Appliances (AKBARALLYS)<br />
                    15 Sakar VII Nehru Bridge Corner,<br />
                    Ashram Rd, opposite Patang Hotel,<br />
                    Ahmedabad, Gujarat 380009
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+917926580157" className="text-gray-300 hover:text-primary transition-colors duration-200">
                    +91 79 2658 0157
                  </a>
                  <p className="text-xs text-gray-400">Call us anytime</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="mailto:info@sunpointappliances.in" className="text-gray-300 hover:text-primary transition-colors duration-200">
                    info@sunpointappliances.in
                  </a>
                  <p className="text-xs text-gray-400">Email us</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <a href="https://wa.me/917926580157" className="text-gray-300 hover:text-primary transition-colors duration-200">
                    WhatsApp Chat
                  </a>
                  <p className="text-xs text-gray-400">Chat with us for queries and offers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sunday: 11:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-primary">Why Choose Us?</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">Genuine Products with Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">Competitive Prices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">Expert In-Store Guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">Doorstep Delivery & Installation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">Excellent After-Sales Support</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <h4 className="text-sm font-semibold text-primary mb-2">Trusted by 1000+ Customers</h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                Join thousands of satisfied customers who trust Sun Point Appliances for their home appliance needs.
              </p>
              <div className="flex items-center justify-end gap-2 text-yellow-400 mb-2 mt-4">
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
                <Star className="h-3 w-3 fill-current" />
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
                <a 
                  href="https://www.facebook.com/people/Sun-Point-Appliances-Akbarallys/61578375280774/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors duration-200" 
                  title="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/sun.point.appliances?igsh=bGp5bWpuMmxjeXl3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors duration-200" 
                  title="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>🏠 Your Trusted Home Appliance Partner</span>
                <span>•</span>
                <span>🚚 Free Delivery in Ahmedabad</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © 2024 Sun Point Appliances (AKBARALLYS). All rights reserved.
              </p>
              {/* <p className="text-gray-400 text-xs mt-1">
                GST No: 24ABCDE1234F1Z5 | PAN: ABCDE1234F
              </p> */}
              <div className="mt-2">
                <a 
                  href="/privacy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Shield className="h-3 w-3" />
                  Privacy Policy & Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
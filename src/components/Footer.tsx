import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Notes Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Notes</h3>
          </div>

          {/* Explore Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support service SLA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">PDPC</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">E-Invoicing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Metro Website Builder</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Metro Sales Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Metro Purchase Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Company Setup Request Form</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Facebook size={16} />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              </li>
              <li className="flex items-center gap-2">
                <Youtube size={16} />
                <a href="#" className="text-gray-300 hover:text-white transition-colors">YouTube</a>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@metrogroup.solutions" className="text-gray-300 hover:text-white transition-colors">
                  info@metrogroup.solutions
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+6586791036" className="text-gray-300 hover:text-white transition-colors">
                  (65) 8679 1036
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="text-right">
              <h3 className="text-lg font-semibold mb-2">Metro Group Pte Ltd</h3>
              <address className="text-gray-300 not-italic text-sm leading-relaxed">
                116 Changi Road<br />
                #04-03 WIS@Changi<br />
                S6 419718<br />
                Singapore
              </address>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-start">
            <div className="flex items-center gap-2">
              <div className="bg-white text-brand-dark p-2 rounded">
                <span className="font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">METRO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
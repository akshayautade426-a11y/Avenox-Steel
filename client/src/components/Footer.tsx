import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start md:items-center lg:items-start">
            <div className="mb-4 flex flex-col items-center justify-center text-center">
              <div style={{ width: 260, maxWidth: '100%' }}>
                <AnimatedLogo size={260} animated={false} suppressAAnimation={true} />
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 text-left md:text-center lg:text-left">
              Precision-driven steel detailing and engineering solutions for complex structural projects.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Steel Detailing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  3D Modeling
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  Shop Drawings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  BIM Coordination
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:info@avenoxsteel.com" className="text-gray-300 hover:text-primary transition-colors text-sm block">
                    info@avenoxsteel.com
                  </a>
                  <a href="mailto:estimating@avenoxsteel.com" className="text-gray-300 hover:text-primary transition-colors text-sm block">
                    estimating@avenoxsteel.com
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+13072041263" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  +1 307 2041 263
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  30 N Gould St Ste R
                  <br />
                  Sheridan, WY 82801,  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} AVENOX STEEL SERVICES LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

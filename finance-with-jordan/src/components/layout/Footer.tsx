import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Shield, Award } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { name: 'First Home Buyer', href: '/services/first-home-buyer' },
    { name: 'Investment Property', href: '/services/investment-property' },
    { name: 'Refinancing', href: '/services/refinancing' },
    { name: 'Commercial Finance', href: '/services/commercial' },
    { name: 'SMSF Lending', href: '/services/smsf' },
  ];

  const resourceLinks = [
    { name: 'Mortgage Calculator', href: '/resources/calculator' },
    { name: 'First Home Buyer Guide', href: '/resources/guides' },
    { name: 'FAQ', href: '/resources/faq' },
    { name: 'Blog', href: '/resources/blog' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Finance With Jordan</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted mortgage broker helping Australians achieve their property and financial goals with expert guidance and personalized service.
            </p>
            
            {/* Credentials */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-secondary-500 mr-2" />
                <span className="text-sm">MFAA Member</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-secondary-500 mr-2" />
                <span className="text-sm">Licensed</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 mr-3 text-primary-500" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-3 text-primary-500" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-primary-500" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-3 text-primary-500" />
                <span>{CONTACT_INFO.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h5 className="text-sm font-semibold text-white mb-2">Quick Links</h5>
              <ul className="space-y-1">
                <li>
                  <Link to="/about" className="text-sm hover:text-white transition-colors">
                    About Jordan
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-sm hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} Finance With Jordan. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 leading-relaxed">
              Jordan is a Credit Representative (Credit Representative Number: [NUMBER]) of [LICENSEE NAME] 
              Australian Credit Licence [NUMBER]. This website contains general information only and does not 
              constitute financial advice. You should consider seeking independent financial advice before 
              making any financial decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
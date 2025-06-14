import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAVIGATION_ITEMS, CONTACT_INFO } from '@/constants';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-900 hover:text-primary-700 transition-colors">
              Finance With Jordan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-9">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-primary-600 px-8 py-2 text-sm font-medium transition-colors relative ${
                  location.pathname === item.href ? 'text-primary-600' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <Button to="/contact" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.href ? 'text-primary-600 bg-primary-50' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t space-y-3">
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="flex items-center text-gray-700 px-3 py-2 hover:text-primary-600 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="flex items-center text-gray-700 px-3 py-2 hover:text-primary-600 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <div className="px-3">
                  <Button 
                    to="/contact" 
                    fullWidth
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 
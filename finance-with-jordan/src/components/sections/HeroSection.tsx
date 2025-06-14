import React from 'react';
import { ArrowRight, Shield, Users, Clock, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import jordanPhoto from '@/assets/jordan-professional.jpeg';

const HeroSection: React.FC = () => {
  const trustIndicators = [
    { icon: Shield, text: 'FBAA Member', subtext: 'Certified' },
    { icon: Users, text: 'Happy Clients', subtext: '100+' },
    { icon: Clock, text: 'Pre-Approval', subtext: '7 Days' },
  ];

  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Making Home Finance
              <span className="text-primary-600 block">Simple & Stress-Free</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Navigate your home finance journey with confidence. As your trusted mortgage broker, 
              I'll guide you through every step, from first consultation to settlement.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustIndicators.map((indicator, index) => {
                const IconComponent = indicator.icon;
                return (
                  <motion.div
                    key={indicator.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center bg-white px-4 py-3 rounded-full shadow-soft"
                  >
                    <IconComponent className="h-5 w-5 text-secondary-600 mr-2" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">{indicator.subtext}</span>
                      <p className="text-xs text-gray-600">{indicator.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://calendly.com/jordansoo08?fbclid=PAQ0xDSwK4w3FleHRuA2FlbQIxMQABpwv9jRGVBaT4VfSy9hhkvm02Ow7W_PVBp4MzllXOqbRM3XfTzTXUJN9EdJEW_aem_QUOkfkY3Mnqm5EQZLsz70g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Button variant="outline" size="lg" icon={Calculator} to="/resources/calculator">
                Calculate Your Borrowing Power
              </Button>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm text-gray-500 mt-6"
            >
              ✓ No obligation consultation &nbsp;&nbsp; ✓ Compare 40+ lenders &nbsp;&nbsp; ✓ Expert knowledge
            </motion.p>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <img
                  src={jordanPhoto}
                  alt="Jordan - Mortgage Broker"
                  className="w-3/4 h-3/4 object-cover rounded-xl shadow-2xl"
                />
              </div>

              {/* Floating Stats */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium"
              >
                <div className="text-3xl font-bold text-primary-600">$50M+</div>
                <div className="text-sm text-gray-600">Loans Settled</div>
              </motion.div> */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-medium"
              >
                <div className="text-3xl font-bold text-secondary-600">4.8★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
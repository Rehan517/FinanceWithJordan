import React from 'react';
import { ArrowRight, Shield, Users, Clock, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import jordanPhoto from '@/assets/jordan-professional.jpeg';

const HeroSection: React.FC = () => {
  const trustIndicators = [
    { icon: Shield, text: 'FBAA Member', subtext: 'Certified' },
    { icon: Users, text: 'Happy Clients', subtext: '50+' },
    { icon: Clock, text: 'Response Time', subtext: '2 Hours' },
  ];

  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 py-12 sm:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Making Home Finance
              <span className="text-primary-600 block">Simple & Stress-Free</span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Navigate your home finance journey with confidence. As your trusted mortgage broker, 
              I'll guide you through every step, from first consultation to settlement.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-10 sm:pt-5 mb-4 sm:mb-6 justify-between">
              {trustIndicators.map((indicator, index) => {
                const IconComponent = indicator.icon;
                return (
                  <motion.div
                    key={indicator.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center bg-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-soft min-w-[100px] sm:min-w-[120px] text-left"
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-600 mr-2 sm:mr-3" />
                    <div className="text-left">
                      <span className="text-xs sm:text-sm font-medium text-gray-900">{indicator.subtext}</span>
                      <p className="text-[10px] sm:text-xs text-gray-600 leading-tight whitespace-normal">{indicator.text}</p>
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
            >
              <a
                href="https://calendly.com/jordansoo08?fbclid=PAQ0xDSwK4w3FleHRuA2FlbQIxMQABpwv9jRGVBaT4VfSy9hhkvm02Ow7W_PVBp4MzllXOqbRM3XfTzTXUJN9EdJEW_aem_QUOkfkY3Mnqm5EQZLsz70g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                Get Your Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Button variant="outline" size="lg" icon={Calculator} to="/calculators" className="w-full sm:w-auto">
                Mortgage Calculators
              </Button>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6"
            >
              ✓ No obligation consultation &nbsp;&nbsp; ✓ Compare 40+ lenders &nbsp;&nbsp; ✓ Expert knowledge
            </motion.p>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center relative overflow-hidden w-72 h-72 sm:w-[26rem] sm:h-[26rem] md:w-[28rem] md:h-[28rem] lg:w-80 lg:h-80 xl:w-96 xl:h-96 mx-auto">
                <img
                  src={jordanPhoto}
                  alt="Jordan - Mortgage Broker"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
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
                className="absolute -top-3 right-3 mr-2 sm:-top-4 sm:right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8 bg-white p-2 sm:p-3 rounded-xl shadow-medium w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex flex-col items-center justify-center"
              >
                <div className="text-lg sm:text-2xl font-bold text-secondary-600">4.8★</div>
                <div className="hidden sm:block text-[11px] sm:text-xs text-gray-600">Client Rating</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
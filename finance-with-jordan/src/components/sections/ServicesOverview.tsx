import React from "react";
import {
  Home,
  TrendingUp,
  RefreshCw,
  Building,
  CreditCard,
  PiggyBank,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "@/constants";

const ServicesOverview: React.FC = () => {
  // Map icon strings to actual icon components
  const iconMap = {
    Home,
    TrendingUp,
    RefreshCw,
    Building,
    CreditCard,
    PiggyBank,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 mt-0"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Comprehensive Finance Solutions
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From first home purchases to complex investment strategies, I
            provide tailored finance solutions that match your goals and
            circumstances.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white border border-gray-200 rounded-xl p-3 sm:p-4 md:p-6 hover:shadow-medium hover:-translate-y-1 transition-all duration-300"
              >
                {/* Service Header */}
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="bg-primary-100 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                {/*
                <Link
                  to={service.ctaLink}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:underline transition-colors"
                >
                  {service.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                */}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl sm:rounded-2xl p-4 sm:p-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
              Not sure which option is right for you?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Every situation is unique. Let's discuss your specific needs and
              find the perfect financing solution together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://calendly.com/jordansoo08?fbclid=PAQ0xDSwK4w3FleHRuA2FlbQIxMQABpwv9jRGVBaT4VfSy9hhkvm02Ow7W_PVBp4MzllXOqbRM3XfTzTXUJN9EdJEW_aem_QUOkfkY3Mnqm5EQZLsz70g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-600 text-white text-base sm:text-lg font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                Schedule Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              {/* <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                View All Services
              </Link> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Initial Call',
    summary: 'Book a call to discuss your property goals with an expert.',
    description: 'Once you\'ve filled out one of the "Purchase" or "Refinance" forms above we will book a call to discuss what your goals are with property. This will be with an Investment Savvy Mortgage broker who will set up the Game Plan!'
  },
  {
    id: 2,
    title: 'Lodgement',
    summary: 'We collect your documents and find the best lender for you.',
    description: 'After our initial call we will request the required documents from you and get to work finding the best lender to suit your goals. From there it\'s up to us, we will lodge your deal & hammer the banks to get it done.'
  },
  {
    id: 3,
    title: 'Approval',
    summary: 'We guide you through the next steps after approval.',
    description: 'Once approved we will outline the next steps of what you need to do, whether it\'s a purchase or a refinance the team will be there walking you through each step of the process to settlement.'
  },
  {
    id: 4,
    title: 'Post-Settlement',
    summary: 'We help set up your accounts and review your rates regularly.',
    description: 'Once the Property settles we will help ensure all of your offsets & accounts are setup correctly. The job isn\'t finished there, every 6 - 12 months we will be completing rate reviews on your loans to ensure you are on the most competitive rate possible.'
  }
];

const ProcessOverview: React.FC = () => {
  return (
    <section className="py-10 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our Process
          </h2>
          <p className="text-md sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            A straightforward approach to getting you the best possible outcome
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-200 -translate-y-1/2 hidden md:block" />
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 relative"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="relative"
              >
                {/* Step Number and Arrow */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-base sm:text-xl font-semibold mb-3 sm:mb-4 relative z-10">
                    {step.id}
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary-600 absolute -right-4 top-3 transform hidden md:block" />
                  )}
                </div>

                {/* Step Content */}
                <div className="text-center bg-gray-50 relative z-10">
                  <h3 className="text-lg sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="px-10 text-sm text-gray-600 leading-relaxed block sm:hidden">
                    {step.summary}
                  </p>
                  <p className="hidden sm:block text-sm md:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview; 
import React from "react";
import { motion } from "framer-motion";
import { Phone, Award, Users, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/constants";
import jordanImage from "@/assets/jordan-professional.jpeg";

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      label: "Integrity",
      value: "FBAA Certified",
      description: "Our ethical lending philosophy means we only get paid by lenders post-settlement – never by third parties like real estate agencies."
    },
    {
      icon: Users,
      label: "Honesty",
      value: "50+ Happy Clients",
      description: "We believe in radical transparency: being open about our internal processes, how we're compensated, and who we have commercial relationships with."
    },
    {
      icon: Clock,
      label: "Client-Centrism",
      value: "< 2 Hours Response",
      description: "We always act in our clients' best interests – even if financial incentives point the other way."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[1/1] rounded-full overflow-hidden bg-gray-100 w-72 h-72 sm:w-[26rem] sm:h-[26rem] md:w-[28rem] md:h-[28rem] lg:w-90 lg:h-90 xl:w-126 xl:h-126 mx-auto">
                <img
                  src={jordanImage}
                  alt="Jordan - Finance Expert"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Your Trusted Finance Partner
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              My passion for property began when my parents encouraged me to invest in property instead of buying a car I had saved for. 
              This led me to dive deep into property research, and my path became clear after speaking with a successful mortgage broker who guided me step-by-step through the process. 
              His insights opened my eyes to the power of property, and I knew I wanted to help others achieve the same success.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                Inspired by that experience, I made the decision to leave my aviation course and pursue a career in property. 
                I obtained the necessary certifications to become a qualified mortgage broker, 
                with the goal of helping people like myself navigate the property journey and build successful portfolios.
                </p>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  My mission is simple: to assist as many people as I can in reaching their property goals, whether it's financial freedom or building a business. I'm committed to offering the same support and guidance that was offered to me, helping you create the life you desire through smart property investments.
                  </p>
                  
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://calendly.com/jordansoo08?fbclid=PAQ0xDSwK4w3FleHRuA2FlbQIxMQABpwv9jRGVBaT4VfSy9hhkvm02Ow7W_PVBp4MzllXOqbRM3XfTzTXUJN9EdJEW_aem_QUOkfkY3Mnqm5EQZLsz70g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 bg-primary-600 text-white text-sm sm:text-base font-medium rounded-md hover:bg-primary-700 transition-colors"
                >
                  Schedule a Free Consultation
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 border border-gray-300 text-sm sm:text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Commitments to You
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-xl hover:border-primary-500 transition-colors duration-300"
              >
                <achievement.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {achievement.label}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-primary-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Property Journey?
            </h2>
            <p className="text-primary-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and find the perfect financing solution
              for your needs. The first consultation is completely free, with no
              obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://calendly.com/jordansoo08?fbclid=PAQ0xDSwK4w3FleHRuA2FlbQIxMQABpwv9jRGVBaT4VfSy9hhkvm02Ow7W_PVBp4MzllXOqbRM3XfTzTXUJN9EdJEW_aem_QUOkfkY3Mnqm5EQZLsz70g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 bg-white text-primary-600 text-sm sm:text-base font-medium rounded-md hover:bg-primary-50 transition-colors"
              >
                Book Free Consultation
              </a>
              {/* <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-white text-sm sm:text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Email
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

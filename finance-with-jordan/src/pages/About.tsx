import React from "react";
import { motion } from "framer-motion";
import { Phone, Award, Users, Clock, DollarSign } from "lucide-react";
import { CONTACT_INFO } from "@/constants";
import jordanImage from "@/assets/jordan-professional.jpeg";

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      label: "MFAA Certified",
      value: "10+ Years",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: "500+",
    },
    {
      icon: Clock,
      label: "Average Response Time",
      value: "< 4 Hours",
    },
    {
      icon: DollarSign,
      label: "Loans Settled",
      value: "$50M+",
    },
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
              className="relative max-w-xs sm:max-w-md mx-auto lg:max-w-lg"
            >
              <div className="aspect-[1/1] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={jordanImage}
                  alt="Jordan - Finance Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-18 h-18 sm:w-24 sm:h-24 bg-secondary-100 rounded-full -z-10"></div>
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
                With over a decade of experience in mortgage broking, I've
                helped hundreds of clients achieve their property dreams. My
                approach combines deep industry knowledge with personalized
                service, ensuring you get the best possible outcome for your
                unique situation.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  I specialize in helping first-time homebuyers navigate the
                  complex world of property finance, assisting property
                  investors in building their portfolios, and finding the best
                  refinancing solutions to save my clients money.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  My commitment is to make the loan process as smooth and
                  stress-free as possible, while securing the most competitive
                  rates and terms for your circumstances.
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
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-sm"
              >
                <achievement.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mx-auto mb-2 sm:mb-4" />
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {achievement.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{achievement.label}</div>
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

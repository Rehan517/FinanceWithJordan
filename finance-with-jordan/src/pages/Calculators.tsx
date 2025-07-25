import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';

const Calculators: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Financial Calculators
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional financial calculators are coming soon to help you estimate loan repayments, borrowing capacity, and associated costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Calculator className="h-16 w-16 sm:h-20 sm:w-20 text-primary-600 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working hard to bring you the most accurate and user-friendly financial calculators. 
              In the meantime, contact us for personalized calculations and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/jordansoo08?fbclid=PAQ0xDSwK4w3FleHRuA2FlbQIxMQABpwv9jRGVBaT4VfSy9hhkvm02Ow7W_PVBp4MzllXOqbRM3XfTzTXUJN9EdJEW_aem_QUOkfkY3Mnqm5EQZLsz70g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                Get Personalised Calculations
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              {/* <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </a> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Calculators; 

/*
=============================================================================
ORIGINAL CALCULATOR CODE - COMMENTED OUT TO BE RESTORED LATER
=============================================================================

const [activeCalculator, setActiveCalculator] = useState('loan-repayment');

// Loan Repayment Calculator State
const [loanAmount, setLoanAmount] = useState(500000);
const [interestRate, setInterestRate] = useState(6.5);
const [loanTerm, setLoanTerm] = useState(30);

// Borrowing Capacity Calculator State
const [annualIncome, setAnnualIncome] = useState(80000);
const [monthlyExpenses, setMonthlyExpenses] = useState(3000);
const [existingDebts, setExistingDebts] = useState(0);
const [deposit, setDeposit] = useState(100000);

// Stamp Duty Calculator State
const [propertyValue, setPropertyValue] = useState(600000);
const [isFirstHomeBuyer, setIsFirstHomeBuyer] = useState(false);
const [state, setState] = useState('WA');

const calculators = [
  {
    id: 'loan-repayment',
    title: 'Loan Repayment Calculator',
    description: 'Calculate your monthly mortgage repayments',
    icon: Calculator,
  },
  {
    id: 'borrowing-capacity',
    title: 'Borrowing Capacity Calculator',
    description: 'Find out how much you can borrow',
    icon: DollarSign,
  },
  {
    id: 'stamp-duty',
    title: 'Stamp Duty Calculator',
    description: 'Calculate stamp duty costs by state',
    icon: FileText,
  },
];

// Calculation Functions
const calculateMonthlyRepayment = () => {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  return monthlyPayment;
};

const calculateBorrowingCapacity = () => {
  const monthlyIncome = annualIncome / 12;
  const availableIncome = monthlyIncome - monthlyExpenses - (existingDebts * 0.03);
  const maxMonthlyPayment = availableIncome * 0.3; // 30% of available income
  const monthlyRate = 6.5 / 100 / 12; // Assuming 6.5% interest rate
  const numberOfPayments = 30 * 12; // 30 years
  const maxLoanAmount = (maxMonthlyPayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) / 
                       (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));
  return Math.max(0, maxLoanAmount);
};

const calculateStampDuty = () => {
  // Simplified WA stamp duty calculation
  let stampDuty = 0;
  if (propertyValue <= 120000) {
    stampDuty = propertyValue * 0.015;
  } else if (propertyValue <= 150000) {
    stampDuty = 1800 + (propertyValue - 120000) * 0.025;
  } else if (propertyValue <= 360000) {
    stampDuty = 2550 + (propertyValue - 150000) * 0.035;
  } else if (propertyValue <= 725000) {
    stampDuty = 9900 + (propertyValue - 360000) * 0.045;
  } else {
    stampDuty = 26325 + (propertyValue - 725000) * 0.055;
  }

  // First home buyer concession (simplified)
  if (isFirstHomeBuyer && propertyValue <= 600000) {
    stampDuty = Math.max(0, stampDuty - 19000);
  }

  return stampDuty;
};

const renderCalculator = () => {
  switch (activeCalculator) {
    case 'loan-repayment':
      return (
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Loan Amount
              </label>
              <div className="relative">
                <span className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Loan Term (years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="bg-primary-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Monthly Repayment</h3>
            <p className="text-2xl sm:text-3xl font-bold text-primary-600">
              ${calculateMonthlyRepayment().toLocaleString('en-AU', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">
              Total interest: ${((calculateMonthlyRepayment() * loanTerm * 12) - loanAmount).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>
      );

    case 'borrowing-capacity':
      return (
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Annual Income
              </label>
              <div className="relative">
                <span className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value))}
                  className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Monthly Expenses
              </label>
              <div className="relative">
                <span className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Existing Debts
              </label>
              <div className="relative">
                <span className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={existingDebts}
                  onChange={(e) => setExistingDebts(Number(e.target.value))}
                  className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Available Deposit
              </label>
              <div className="relative">
                <span className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          <div className="bg-primary-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Estimated Borrowing Capacity</h3>
            <p className="text-2xl sm:text-3xl font-bold text-primary-600">
              ${calculateBorrowingCapacity().toLocaleString('en-AU', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">
              Maximum property value: ${(calculateBorrowingCapacity() + deposit).toLocaleString('en-AU', { maximumFractionDigits: 0 })}
            </p>
          </div>
        </div>
      );

    case 'stamp-duty':
      return (
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Property Value
              </label>
              <div className="relative">
                <span className="absolute left-2.5 sm:left-3 top-2.5 sm:top-3 text-gray-500 text-sm">$</span>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                State
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="WA">Western Australia</option>
                <option value="NSW">New South Wales</option>
                <option value="VIC">Victoria</option>
                <option value="QLD">Queensland</option>
                <option value="SA">South Australia</option>
                <option value="TAS">Tasmania</option>
                <option value="NT">Northern Territory</option>
                <option value="ACT">Australian Capital Territory</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isFirstHomeBuyer}
                  onChange={(e) => setIsFirstHomeBuyer(e.target.checked)}
                  className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-700">First Home Buyer</span>
              </label>
            </div>
          </div>
          <div className="bg-primary-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">Estimated Stamp Duty</h3>
            <p className="text-2xl sm:text-3xl font-bold text-primary-600">
              ${calculateStampDuty().toLocaleString('en-AU', { maximumFractionDigits: 0 })}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">
              *Based on {state} rates. Actual costs may vary.
            </p>
          </div>
        </div>
      );

    default:
      return null;
  }
};

ORIGINAL JSX STRUCTURE:
======================

      // Calculator Section
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            // Calculator Navigation
            <div className="lg:col-span-1">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Choose Calculator</h2>
              <div className="space-y-2">
                {calculators.map((calc) => {
                  const IconComponent = calc.icon;
                  return (
                    <button
                      key={calc.id}
                      onClick={() => setActiveCalculator(calc.id)}
                      className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all ${
                        activeCalculator === calc.id
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 mt-1 mr-2 sm:mr-3 text-current" />
                        <div>
                          <h3 className="font-medium text-xs sm:text-sm">{calc.title}</h3>
                          <p className="text-[10px] sm:text-xs text-gray-600 mt-1">{calc.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            // Calculator Content
            <div className="lg:col-span-3">
              <motion.div
                key={activeCalculator}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6"
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {calculators.find(c => c.id === activeCalculator)?.title}
                </h2>
                {renderCalculator()}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      // CTA Section
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-primary-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-primary-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              These calculators provide estimates only. For accurate figures and personalized advice 
              tailored to your situation, let's have a conversation about your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://calendly.com/jordansoo08?fbclid=PAQ0xDSwK4w3FleHRuA2FlbQIxMQABpwv9jRGVBaT4VfSy9hhkvm02Ow7W_PVBp4MzllXOqbRM3XfTzTXUJN9EdJEW_aem_QUOkfkY3Mnqm5EQZLsz70g"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 bg-white text-primary-600 text-sm sm:text-base font-medium rounded-md hover:bg-primary-50 transition-colors"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

=============================================================================
END OF COMMENTED ORIGINAL CODE
=============================================================================
*/ 
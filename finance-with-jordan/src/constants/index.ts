import { Service, Testimonial, NavigationItem, TrustIndicator, FAQItem } from '@/types';

export const CONTACT_INFO = {
  phone: '+61 481 321 988',
  email: 'jordansoofinance@gmail.com',
  address: 'Wherever you are, Premium Service Follows',
  emergencyContact: '+61 481 321 988',
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'About Jordan', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Calculators', href: '/calculators' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'first-home-buyer',
    title: 'First Home Buyer Loans',
    description: 'Navigate your first home purchase with expert guidance and access to exclusive first home buyer benefits.',
    icon: 'Home',
    features: ['First Home Owner Grants', 'Low Deposit Options', 'Keystart Loans', 'Government Schemes'],
    ctaText: 'Get First Home Buyer Guide',
    ctaLink: '/services/first-home-buyer',
    category: 'residential'
  },
  {
    id: 'investment-property',
    title: 'Investment Property Finance',
    description: 'Build your property portfolio with strategic financing solutions and tax-effective structures.',
    icon: 'TrendingUp',
    features: ['Portfolio Lending', 'SMSF Loans', 'Tax Benefits', 'Negative Gearing'],
    ctaText: 'Investment Strategy Consult',
    ctaLink: '/services/investment-property',
    category: 'investment'
  },
  {
    id: 'refinancing',
    title: 'Refinancing & Restructuring',
    description: 'Save thousands by switching to a better rate or accessing equity for your next investment.',
    icon: 'RefreshCw',
    features: ['Rate Comparisons', 'Equity Access', 'Debt Consolidation', 'Cash Out Options'],
    ctaText: 'Calculate Savings',
    ctaLink: '/services/refinancing',
    category: 'refinance'
  },
  {
    id: 'commercial',
    title: 'Commercial Finance',
    description: 'Secure funding for your business premises, equipment, or commercial investment properties.',
    icon: 'Building',
    features: ['Business Loans', 'Equipment Finance', 'Commercial Property', 'Development Finance'],
    ctaText: 'Business Finance Quote',
    ctaLink: '/services/commercial',
    category: 'commercial'
  },
  {
    id: 'personal',
    title: 'Personal & Asset Finance',
    description: 'Flexible financing solutions for personal needs, vehicles, and lifestyle purchases.',
    icon: 'CreditCard',
    features: ['Car Loans', 'Personal Loans', 'Asset Finance', 'Boat/Caravan Loans'],
    ctaText: 'Personal Finance Options',
    ctaLink: '/services/personal',
    category: 'personal'
  },
  {
    id: 'smsf',
    title: 'SMSF Lending',
    description: 'Leverage your superannuation to build wealth through property investment with SMSF loans.',
    icon: 'PiggyBank',
    features: ['SMSF Setup', 'Property Investment', 'Compliance Support', 'Trustee Advice'],
    ctaText: 'SMSF Strategy Session',
    ctaLink: '/services/smsf',
    category: 'super'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & Michael Chen',
    location: 'Fremantle, WA',
    rating: 5,
    content: 'Jordan made our first home buying journey so much easier than we expected. His knowledge of the local market and first home buyer grants saved us thousands. Highly recommend!',
    service: 'First Home Buyer Loan',
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'David Rodriguez',
    location: 'Perth CBD, WA',
    rating: 5,
    content: 'Professional, responsive, and got me the best rate in the market. Jordan helped me refinance and access equity for my investment property. Outstanding service!',
    service: 'Refinancing',
    date: '2024-02-28'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    location: 'Subiaco, WA',
    rating: 5,
    content: 'Jordan\'s expertise in investment property finance is exceptional. He structured my portfolio perfectly and his ongoing support has been invaluable.',
    service: 'Investment Property Finance',
    date: '2024-01-20'
  },
  {
    id: '4',
    name: 'James Mitchell',
    location: 'Cottesloe, WA',
    rating: 5,
    content: 'Needed commercial finance for my business expansion. Jordan delivered exactly what he promised - competitive rates and quick settlement. Will definitely use again.',
    service: 'Commercial Finance',
    date: '2024-04-10'
  },
  {
    id: '5',
    name: 'Lisa & Tom Wilson',
    location: 'Scarborough, WA',
    rating: 5,
    content: 'Jordan helped us with our SMSF property purchase. His knowledge of super regulations and lending criteria is outstanding. Made a complex process simple.',
    service: 'SMSF Lending',
    date: '2024-03-05'
  }
];

export const TRUST_INDICATORS: TrustIndicator[] = [
  { icon: 'Shield', text: 'MFAA Member', value: 'Certified' },
  { icon: 'Users', text: 'Happy Clients', value: '500+' },
  { icon: 'Clock', text: 'Pre-Approval', value: '7 Days' },
  { icon: 'DollarSign', text: 'Loans Settled', value: '$50M+' },
  { icon: 'Star', text: 'Client Rating', value: '4.9★' },
  { icon: 'Award', text: 'Industry Experience', value: '10+ Years' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How much can I borrow for a home loan?',
    answer: 'Your borrowing capacity depends on your income, expenses, credit history, and the lender\'s criteria. Generally, you can borrow up to 6-7 times your annual income, but this varies. I can provide a detailed assessment and help you understand your options.',
    category: 'borrowing'
  },
  {
    question: 'What is the minimum deposit required?',
    answer: 'While some lenders accept as little as 5% deposit, most require 10-20%. First home buyers may qualify for government schemes with lower deposits. Investment properties typically require 20% minimum. I can help find the best options for your situation.',
    category: 'deposits'
  },
  {
    question: 'How long does the loan approval process take?',
    answer: 'Pre-approval typically takes 3-7 days, while full approval can take 2-4 weeks depending on the lender and complexity of your application. I work with lenders who offer faster processing for qualified applicants.',
    category: 'process'
  },
  {
    question: 'Should I fix or keep my interest rate variable?',
    answer: 'This depends on your risk tolerance, budget, and market conditions. Fixed rates provide certainty but less flexibility. Variable rates may offer features like offset accounts. I\'ll help you choose the best option for your circumstances.',
    category: 'rates'
  },
  {
    question: 'What fees are involved in getting a mortgage?',
    answer: 'Common fees include application fees, valuation fees, legal fees, and lenders mortgage insurance (if deposit is under 20%). I work to minimize fees and can often negotiate waivers with lenders.',
    category: 'fees'
  }
];

export const SERVICE_CATEGORIES = [
  { id: 'residential', name: 'Residential', color: 'primary' },
  { id: 'investment', name: 'Investment', color: 'secondary' },
  { id: 'commercial', name: 'Commercial', color: 'accent' },
  { id: 'refinance', name: 'Refinancing', color: 'primary' },
  { id: 'personal', name: 'Personal', color: 'secondary' },
  { id: 'super', name: 'SMSF', color: 'accent' }
];

export const TIMELINE_OPTIONS = [
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Just exploring options'
];

export const PREFERRED_CONTACT_OPTIONS = [
  { value: 'phone', label: 'Phone Call' },
  { value: 'email', label: 'Email' }
];

// Security constants
export const SECURITY_CONFIG = {
  enableCSRF: true,
  enableRateLimit: true,
  maxRequestsPerMinute: 10,
  sanitizeInputs: true,
};

export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s'-]+$/,
    message: 'Name must contain only letters, spaces, hyphens, and apostrophes'
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    pattern: /^(\+61|0)[2-9]\d{8}$/,
    message: 'Please enter a valid Australian phone number'
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be between 10 and 1000 characters'
  }
}; 
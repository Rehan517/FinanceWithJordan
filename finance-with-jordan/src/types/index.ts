export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  service: string;
  avatar?: string;
  date?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'phone' | 'email';
  timeline: string;
  consent: boolean;
}

export interface Calculator {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  propertyValue?: number;
  deposit?: number;
}

export interface CalculatorResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  borrowingCapacity?: number;
}

export interface NavigationItem {
  name: string;
  href: string;
  isActive?: boolean;
}

export interface TrustIndicator {
  icon: string;
  text: string;
  value?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  slug: string;
  featuredImage?: string;
}

export interface SocialProof {
  type: 'review' | 'certification' | 'statistic';
  title: string;
  value: string;
  description?: string;
  source?: string;
}

// Security types for form validation and sanitization
export interface ValidationSchema {
  field: string;
  rules: string[];
  message?: string;
}

export interface SecurityConfig {
  enableCSRF: boolean;
  enableRateLimit: boolean;
  maxRequestsPerMinute: number;
  sanitizeInputs: boolean;
} 
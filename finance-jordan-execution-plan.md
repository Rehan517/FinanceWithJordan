# Finance With Jordan - Website Execution Plan
## React + TypeScript + TailwindCSS Implementation

---

## 1. Project Setup & Architecture

### 1.1 Technology Stack
- **Frontend Framework:** React 18+ with TypeScript
- **Styling:** TailwindCSS with custom configuration
- **Build Tool:** Vite (for faster development)
- **Routing:** React Router v6
- **State Management:** React Context API + useReducer
- **Forms:** React Hook Form with Zod validation
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel or Netlify
- **CMS:** Headless CMS (Strapi or Sanity) for content management

### 1.2 Project Structure
```
finance-with-jordan/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── forms/        # Form components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── constants/        # Constants and configuration
│   ├── assets/           # Static assets
│   └── styles/           # Global styles
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 2. Phase 1: Foundation Setup (Week 1)

### 2.1 Environment Setup
```bash
# Initialize project
npm create vite@latest finance-with-jordan -- --template react-ts
cd finance-with-jordan

# Install dependencies
npm install react-router-dom framer-motion lucide-react
npm install react-hook-form @hookform/resolvers zod
npm install @headlessui/react @heroicons/react

# Install development dependencies
npm install -D tailwindcss postcss autoprefixer
npm install -D @types/node eslint-plugin-react-hooks
npm install -D prettier eslint-config-prettier

# Initialize TailwindCSS
npx tailwindcss init -p
```

### 2.2 TailwindCSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#ecfdf5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        accent: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### 2.3 TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/types/*": ["./src/types/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 3. Phase 2: Core Components & Layout (Week 2)

### 3.1 Type Definitions
```typescript
// src/types/index.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  service: string;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact: 'phone' | 'email';
  timeline: string;
}

export interface Calculator {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  propertyValue?: number;
  deposit?: number;
}
```

### 3.2 Layout Components
```typescript
// src/components/layout/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Jordan', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-900">
              Finance With Jordan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.href ? 'text-primary-600 border-b-2 border-primary-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+61400000000" className="flex items-center text-gray-700 hover:text-primary-600">
              <Phone className="h-4 w-4 mr-2" />
              <span>0400 000 000</span>
            </a>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a href="tel:+61400000000" className="flex items-center text-gray-700 px-3 py-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>0400 000 000</span>
                </a>
                <Link
                  to="/contact"
                  className="block bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 mx-3 mt-2 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
```

### 3.3 Reusable UI Components
```typescript
// src/components/ui/Button.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {Icon && <Icon className="w-4 h-4 mr-2" />}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
};

export default Button;
```

---

## 4. Phase 3: Homepage Development (Week 3)

### 4.1 Hero Section Component
```typescript
// src/components/sections/HeroSection.tsx
import React from 'react';
import { ArrowRight, Shield, Users, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Making Home Finance
              <span className="text-primary-600 block">Simple & Stress-Free</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Navigate your home finance journey with confidence. As your trusted mortgage broker, 
              I'll guide you through every step, from first consultation to settlement.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-5 w-5 text-secondary-600 mr-2" />
                <span className="text-sm font-medium">MFAA Member</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="h-5 w-5 text-secondary-600 mr-2" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 text-secondary-600 mr-2" />
                <span className="text-sm font-medium">7-Day Pre-Approval</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" icon={ArrowRight}>
                Get Your Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                Calculate Your Borrowing Power
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <img
                src="/images/jordan-professional.jpg"
                alt="Jordan - Mortgage Broker"
                className="w-3/4 h-3/4 object-cover rounded-xl shadow-2xl"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary-600">$50M+</div>
              <div className="text-sm text-gray-600">Loans Settled</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-secondary-600">4.9★</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

### 4.2 Services Overview Component
```typescript
// src/components/sections/ServicesOverview.tsx
import React from 'react';
import { Home, TrendingUp, RefreshCw, Building, CreditCard, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: "First Home Buyer Loans",
      description: "Navigate your first home purchase with expert guidance and access to exclusive first home buyer benefits.",
      features: ["First Home Owner Grants", "Low Deposit Options", "Keystart Loans"],
      link: "/services/first-home-buyer"
    },
    {
      icon: TrendingUp,
      title: "Investment Property Finance",
      description: "Build your property portfolio with strategic financing solutions and tax-effective structures.",
      features: ["Portfolio Lending", "SMSF Loans", "Tax Benefits"],
      link: "/services/investment-property"
    },
    {
      icon: RefreshCw,
      title: "Refinancing & Restructuring",
      description: "Save thousands by switching to a better rate or accessing equity for your next investment.",
      features: ["Rate Comparisons", "Equity Access", "Debt Consolidation"],
      link: "/services/refinancing"
    },
    {
      icon: Building,
      title: "Commercial Finance",
      description: "Secure funding for your business premises, equipment, or commercial investment properties.",
      features: ["Business Loans", "Equipment Finance", "Commercial Property"],
      link: "/services/commercial"
    },
    {
      icon: CreditCard,
      title: "Personal & Asset Finance",
      description: "Flexible financing solutions for personal needs, vehicles, and lifestyle purchases.",
      features: ["Car Loans", "Personal Loans", "Asset Finance"],
      link: "/services/personal"
    },
    {
      icon: PiggyBank,
      title: "SMSF Lending",
      description: "Leverage your superannuation to build wealth through property investment with SMSF loans.",
      features: ["SMSF Setup", "Property Investment", "Compliance Support"],
      link: "/services/smsf"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Finance Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first home purchases to complex investment strategies, I provide tailored finance solutions 
            that match your goals and circumstances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
```

---

## 5. Phase 4: Forms & Interactivity (Week 4)

### 5.1 Contact Form Component
```typescript
// src/components/forms/ContactForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import { Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['phone', 'email']),
  timeline: z.string().min(1, 'Please select a timeline'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would integrate with your backend API
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you! Your enquiry has been submitted. Jordan will be in touch within 24 hours.');
      reset();
    } catch (error) {
      alert('Sorry, there was an error submitting your enquiry. Please try again or call directly.');
    }
  };

  const services = [
    'First Home Buyer Loan',
    'Investment Property Finance',
    'Refinancing',
    'Commercial Finance',
    'Personal Finance',
    'SMSF Lending',
    'Other'
  ];

  const timelines = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring options'
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service Required *
          </label>
          <select
            {...register('service')}
            id="service"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
          Timeline *
        </label>
        <select
          {...register('timeline')}
          id="timeline"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">When do you need finance?</option>
          {timelines.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
        {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline.message}</p>}
      </div>

      {/* Preferred Contact */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Method *
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              {...register('preferredContact')}
              type="radio"
              value="phone"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">Phone</span>
          </label>
          <label className="flex items-center">
            <input
              {...register('preferredContact')}
              type="radio"
              value="email"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
            />
            <span className="ml-2 text-sm text-gray-700">Email</span>
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Tell me about your finance needs..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        icon={Send}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        By submitting this form, you agree to our privacy policy and consent to being contacted about your enquiry.
      </p>
    </form>
  );
};

export default ContactForm;
```

### 5.2 Mortgage Calculator Component
```typescript
// src/components/calculators/MortgageCalculator.tsx
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

interface CalculatorResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
}

const MortgageCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculateMortgage = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      const monthlyPayment = principal / numberOfPayments;
      setResult({
        monthlyPayment,
        totalInterest: 0,
        totalPayment: principal,
      });
      return;
    }
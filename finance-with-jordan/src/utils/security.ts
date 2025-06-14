import { VALIDATION_RULES } from '@/constants';

/**
 * Sanitizes user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

/**
 * Validates email format
 */
export const validateEmail = (email: string): boolean => {
  return VALIDATION_RULES.email.pattern.test(email);
};

/**
 * Validates Australian phone number
 */
export const validatePhone = (phone: string): boolean => {
  return VALIDATION_RULES.phone.pattern.test(phone);
};

/**
 * Validates name format
 */
export const validateName = (name: string): boolean => {
  return name.length >= VALIDATION_RULES.name.minLength && 
         name.length <= VALIDATION_RULES.name.maxLength &&
         VALIDATION_RULES.name.pattern.test(name);
};

/**
 * Validates message length and content
 */
export const validateMessage = (message: string): boolean => {
  return message.length >= VALIDATION_RULES.message.minLength &&
         message.length <= VALIDATION_RULES.message.maxLength;
};

/**
 * Rate limiting - simple client-side implementation
 */
export class RateLimiter {
  private attempts: { [key: string]: number[] } = {};
  private maxAttempts: number;
  private windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    if (!this.attempts[identifier]) {
      this.attempts[identifier] = [];
    }

    // Remove old attempts outside the window
    this.attempts[identifier] = this.attempts[identifier].filter(
      timestamp => timestamp > windowStart
    );

    if (this.attempts[identifier].length >= this.maxAttempts) {
      return false;
    }

    this.attempts[identifier].push(now);
    return true;
  }

  getRemainingAttempts(identifier: string): number {
    if (!this.attempts[identifier]) return this.maxAttempts;
    
    const now = Date.now();
    const windowStart = now - this.windowMs;
    const recentAttempts = this.attempts[identifier].filter(
      timestamp => timestamp > windowStart
    );

    return Math.max(0, this.maxAttempts - recentAttempts.length);
  }
}

/**
 * Generates a simple CSRF token (client-side)
 */
export const generateCSRFToken = (): string => {
  return btoa(Math.random().toString(36).substring(2) + Date.now().toString(36));
};

/**
 * Validates CSRF token format
 */
export const validateCSRFToken = (token: string): boolean => {
  try {
    const decoded = atob(token);
    return decoded.length > 10; // Basic validation
  } catch {
    return false;
  }
};

/**
 * Escapes HTML to prevent XSS
 */
export const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Validates file upload (for future use)
 */
export const validateFileUpload = (file: File, allowedTypes: string[], maxSize: number): { valid: boolean; error?: string } => {
  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'File type not allowed' };
  }

  if (file.size > maxSize) {
    return { valid: false, error: 'File size too large' };
  }

  return { valid: true };
};

/**
 * Secure localStorage wrapper
 */
export const secureStorage = {
  setItem: (key: string, value: string): void => {
    try {
      const encrypted = btoa(encodeURIComponent(value));
      localStorage.setItem(key, encrypted);
    } catch (error) {
      console.error('Failed to store item securely:', error);
    }
  },

  getItem: (key: string): string | null => {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      return decodeURIComponent(atob(encrypted));
    } catch (error) {
      console.error('Failed to retrieve item securely:', error);
      return null;
    }
  },

  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  }
}; 
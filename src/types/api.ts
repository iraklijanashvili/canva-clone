/**
 * API Response Types
 * 
 * This file contains TypeScript interfaces for API responses
 * used throughout the application.
 */

/**
 * Base API Response Interface
 * Standard structure for all API responses
 */
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

/**
 * Pagination Metadata Interface
 */
export interface PaginationMeta {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * Paginated API Response Interface
 */
export interface PaginatedApiResponse<T> extends ApiResponse<T[]> {
  meta?: PaginationMeta;
}

/**
 * User Interface
 */
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  image?: string;
  subscription: {
    isActive: boolean;
    plan: 'free' | 'pro' | 'business';
    currentPeriodEnd?: string;
  };
}

/**
 * Project Interface
 */
export interface Project {
  id: string;
  name: string;
  width: number;
  height: number;
  json: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  previewUrl?: string;
}

/**
 * Template Interface
 */
export interface Template {
  id: string;
  name: string;
  width: number;
  height: number;
  json: string;
  previewUrl: string;
  category: string;
  tags: string[];
}

/**
 * Subscription Plan Interface
 */
export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
} 
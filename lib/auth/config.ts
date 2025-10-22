export const AUTH_CONFIG = {
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123', // Plain password from .env
  
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key-change-in-production',
  JWT_EXPIRES_IN: '24h',
  
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes in milliseconds
  
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes in milliseconds
};

export interface AdminUser {
  username: string;
  role: 'admin';
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: AdminUser;
  message?: string;
}

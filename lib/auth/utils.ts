import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { AUTH_CONFIG, type AdminUser, type AuthResponse } from './config';

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function generateToken(user: AdminUser): Promise<string> {
  const secret = new TextEncoder().encode(AUTH_CONFIG.JWT_SECRET);
  
  const token = await new SignJWT({ user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(AUTH_CONFIG.JWT_EXPIRES_IN)
    .sign(secret);
  
  return token;
}

export async function verifyToken(token: string): Promise<AdminUser | null> {
  try {
    const secret = new TextEncoder().encode(AUTH_CONFIG.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return (payload.user as AdminUser) || null;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

const loginAttempts = new Map<string, { count: number; lockedUntil?: number }>();

export function checkLoginAttempts(username: string): { allowed: boolean; message?: string } {
  const attempts = loginAttempts.get(username);
  
  if (attempts?.lockedUntil) {
    if (Date.now() < attempts.lockedUntil) {
      const minutesLeft = Math.ceil((attempts.lockedUntil - Date.now()) / 60000);
      return {
        allowed: false,
        message: `Too many failed attempts. Please try again in ${minutesLeft} minute(s).`
      };
    } else {
      loginAttempts.delete(username);
    }
  }
  
  return { allowed: true };
}

export function recordFailedAttempt(username: string): void {
  const attempts = loginAttempts.get(username) || { count: 0 };
  attempts.count += 1;
  
  if (attempts.count >= AUTH_CONFIG.MAX_LOGIN_ATTEMPTS) {
    attempts.lockedUntil = Date.now() + AUTH_CONFIG.LOCKOUT_DURATION;
  }
  
  loginAttempts.set(username, attempts);
}

export function resetLoginAttempts(username: string): void {
  loginAttempts.delete(username);
}

export async function authenticateAdmin(
  username: string,
  password: string
): Promise<AuthResponse> {
  const attemptCheck = checkLoginAttempts(username);
  if (!attemptCheck.allowed) {
    return {
      success: false,
      message: attemptCheck.message || 'Too many failed attempts',
    };
  }

  if (username !== AUTH_CONFIG.ADMIN_USERNAME) {
    recordFailedAttempt(username);
    return {
      success: false,
      message: 'Invalid credentials',
    };
  }

  const isValidPassword = password === AUTH_CONFIG.ADMIN_PASSWORD;

  if (!isValidPassword) {
    recordFailedAttempt(username);
    return {
      success: false,
      message: 'Invalid credentials',
    };
  }

  resetLoginAttempts(username);

  const user: AdminUser = {
    username: AUTH_CONFIG.ADMIN_USERNAME,
    role: 'admin',
  };

  const token = await generateToken(user);

  return {
    success: true,
    token,
    user,
    message: 'Login successful',
  };
}

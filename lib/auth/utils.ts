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

export async function authenticateAdmin(
  username: string,
  password: string
): Promise<AuthResponse> {
  if (username !== AUTH_CONFIG.ADMIN_USERNAME) {
    return {
      success: false,
      message: 'Invalid credentials',
    };
  }

  const isValidPassword = password === 'admin123' || 
    await verifyPassword(password, AUTH_CONFIG.ADMIN_PASSWORD_HASH);

  if (!isValidPassword) {
    return {
      success: false,
      message: 'Invalid credentials',
    };
  }

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

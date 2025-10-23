import { cookies } from 'next/headers';

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
}

const users: Record<string, { password: string; user: User }> = {
  'admin': {
    password: 'admin123', // In production, this would be hashed
    user: {
      id: '1',
      username: 'admin',
      email: 'admin@momomagic.com',
      role: 'admin',
    },
  },
};

const sessions: Map<string, User> = new Map();

export function generateSessionToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function createSession(user: User): string {
  const token = generateSessionToken();
  sessions.set(token, user);
  return token;
}

export function getSession(token: string): User | null {
  return sessions.get(token) || null;
}

export function deleteSession(token: string): void {
  sessions.delete(token);
}

export function validateCredentials(username: string, password: string): User | null {
  const userRecord = users[username];
  if (userRecord && userRecord.password === password) {
    return userRecord.user;
  }
  return null;
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;
  
  if (!token) {
    return null;
  }
  
  return getSession(token);
}

export async function requireAuth(): Promise<User> {
  const user = await getCurrentUser();
  
  if (!user) {
    throw new Error('Unauthorized');
  }
  
  return user;
}

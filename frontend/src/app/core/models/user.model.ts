import { User } from 'firebase/auth';

export interface AuthUser {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export function userMapper(user: User): AuthUser {
  return {
    id: user.uid,
    username: user.displayName || '',
    email: user.email || '',
  };
}

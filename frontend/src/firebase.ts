import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from 'environment/environment.development';

// Initialize Firebase
const app = initializeApp(environment.firebase);
export const auth = getAuth(app);

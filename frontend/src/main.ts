import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxpOAcom3lP5z4gTf7cQPuYhFows35vGU',
  authDomain: 'clipshare-8f932.firebaseapp.com',
  projectId: 'clipshare-8f932',
  storageBucket: 'clipshare-8f932.firebasestorage.app',
  messagingSenderId: '702021366193',
  appId: '1:702021366193:web:0fedf1d3c84cf4753c4d90',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

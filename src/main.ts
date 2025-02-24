import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';

// these are fine on the client side
const firebaseConfig = {
  apiKey: 'AIzaSyDv2MVfosvS8I6YMjJEmv0Cvpx1U6WipGQ',

  authDomain: 'profile-angular-ae84a.firebaseapp.com',

  projectId: 'profile-angular-ae84a',

  storageBucket: 'profile-angular-ae84a.firebasestorage.app',

  messagingSenderId: '19024717997',

  appId: '1:19024717997:web:b1a5bc56e88a2ddece7e24',
};

initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase credentials configured
const firebaseConfig = {
  apiKey: "AIzaSyD2PoCCswnpxiCUHMwarL1ibl-ut3A8szE",
  authDomain: "sbka-bazzaar.firebaseapp.com",
  projectId: "sbka-bazzaar",
  storageBucket: "sbka-bazzaar.firebasestorage.app",
  messagingSenderId: "929559910003",
  appId: "1:929559910003:web:07cb76c934671c3b7e3c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Database)
export const db = getFirestore(app);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Storage for images
export const storage = getStorage(app);

export default app;

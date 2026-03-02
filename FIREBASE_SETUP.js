// FIREBASE SETUP GUIDE
// ====================

// Step 1: Create Firebase Project
// 1. Go to https://console.firebase.google.com
// 2. Click "Add Project"
// 3. Name: "sbka-bazzaar"
// 4. Continue through setup

// Step 2: Get Firebase Config
// 1. In Firebase Console, go to Project Settings (gear icon)
// 2. Scroll to "SDK setup and configuration"
// 3. Copy your config object

// Step 3: Add to firebaseConfig.js
// Replace the placeholders with your actual Firebase credentials
// YOUR_API_KEY - Get from Firebase Console
// your-project.firebaseapp.com - Your project ID
// your-project-id - Your project ID
// your-project.appspot.com - Your storage bucket
// YOUR_MESSAGING_ID - Messaging sender ID
// YOUR_APP_ID - App ID

// Step 4: Enable Firestore
// 1. In Firebase Console, go to Firestore Database (left menu)
// 2. Click "Create Database"
// 3. Start in "production mode"
// 4. Choose region closest to you

// Step 5: Enable Firebase Storage
// 1. In Firebase Console, go to Storage (left menu)
// 2. Click "Get Started"
// 3. Accept default rules (can customize later)

// Step 6: Setup Firestore Security Rules
// Go to Firestore > Rules and replace with:

/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /groceryItems/{document=**} {
      allow read: if true;
      allow write: if false;  // Set to true after auth
    }
    match /carts/{document=**} {
      allow read, write: if true;  // Add auth check in production
    }
    match /orders/{document=**} {
      allow read, write: if true;  // Add auth check in production
    }
  }
}
*/

// Step 7: Setup Storage Rules
// Go to Storage > Rules and replace with:

/*
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /items/{allPaths=**} {
      allow read: if true;
      allow write: if false;  // Set to true after adding auth
    }
  }
}
*/

// Step 8: (Optional) Setup Google Cloud Vision API
// 1. Go to Google Cloud Console
// 2. Enable Vision API
// 3. Create API key (Credentials > Create Credential > API Key)
// 4. Add to src/ai/imageRecognition.js

// Step 9: Test the App
// npm start
// Scan QR code with Expo Go app

// Common Issues:
// - "Permission denied" in console: Check Firestore rules
// - Images not uploading: Check Storage rules and bucket name
// - "Invalid credentials": Recheck Firebase config object

export default {};

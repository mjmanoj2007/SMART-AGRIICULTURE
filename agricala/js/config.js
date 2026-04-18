// Placeholder configuration file
const CONFIG = {
  // To use real Firebase Auth / Firestore, replace these with your project's config
  FIREBASE: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-app-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
  }
};

// Simple global state
window.State = {
  user: null,
  lang: 'en', // 'en' or 'ta'
  offline: !navigator.onLine,
  currentTab: 'tab-dashboard'
};

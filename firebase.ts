
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXSj7flNs4AfkDK-_1M5P0tM_j3mertyw",
  authDomain: "chandrika-mohan-portfolio.firebaseapp.com",
  projectId: "chandrika-mohan-portfolio",
  storageBucket: "chandrika-mohan-portfolio.firebasestorage.app",
  messagingSenderId: "930203219937",
  appId: "1:930203219937:web:a6e7daef66d6280c2084a0",
  measurementId: "G-N4GNRYTHVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics if supported in the environment
isSupported().then((yes) => {
  if (yes) {
    getAnalytics(app);
  }
});

export default app;

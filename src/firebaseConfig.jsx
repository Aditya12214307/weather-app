// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA__KHokZA1y3xeGHeuYTNuoeKhFB4DGAY",
  authDomain: "weatherapp-e3f12.firebaseapp.com",
  projectId: "weatherapp-e3f12",
  storageBucket: "weatherapp-e3f12.appspot.com", // ✅ fixed here
  messagingSenderId: "486996255017",
  appId: "1:486996255017:web:5d0cb98958a8ce76739738",
  measurementId: "G-4RDK3J1F1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
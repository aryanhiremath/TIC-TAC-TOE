// Import the required Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF4Dsea-00FKQYMf3kPfKnJhvfcrrYoQk",
  authDomain: "tic-tac-toe-b7581.firebaseapp.com",
  projectId: "tic-tac-toe-b7581",
  storageBucket: "tic-tac-toe-b7581.firebasestorage.app",
  messagingSenderId: "650073823131",
  appId: "1:650073823131:web:54f2a280c89866d5cfb33e",
  measurementId: "G-CP51Y0L7RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export the auth tools
export { auth, provider, signInWithPopup, signOut };

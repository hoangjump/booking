import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration (hard-coded values from .env)
const firebaseConfig = {
  apiKey: "AIzaSyDWz6FYGMTCiEZGI_x-3AlROIMo1a_0HDU",
  authDomain: "homestays-fcb33.firebaseapp.com",
  projectId: "homestays-fcb33",
  storageBucket: "homestays-fcb33.firebasestorage.app",
  messagingSenderId: "242023743018",
  appId: "1:312277654585:web:d6b9b12d8360b7c925c1e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeFirestore(app, {
  // don't throw error if undefined
  ignoreUndefinedProperties: true,
});

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { auth, database, storage };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXnExQnWLj5FAtho24JA00shqSFG1qTk0",
  authDomain: "anormalstore-coder.firebaseapp.com",
  projectId: "anormalstore-coder",
  storageBucket: "anormalstore-coder.appspot.com",
  messagingSenderId: "359306920199",
  appId: "1:359306920199:web:4fa7ae269a1429b41485a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
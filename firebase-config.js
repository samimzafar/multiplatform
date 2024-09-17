import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyBpYLYzFT264wUNNfEU5Dq-ZHFfKMCezE0",
  authDomain: "multiplatform-b458c.firebaseapp.com",
  projectId: "multiplatform-b458c",
  storageBucket: "multiplatform-b458c.appspot.com",
  messagingSenderId: "933598417380",
  appId: "1:933598417380:web:c8e352b0eccb1d5226b7f1",
  measurementId: "G-CPR5Q09DWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseRef = getDatabase(app);
export { firebaseRef };

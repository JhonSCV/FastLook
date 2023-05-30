import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBER8CPKAXxANbIL3VMdjPQ8hmQhWrkizk",
  authDomain: "base-clases-estructura-2.firebaseapp.com",
  projectId: "base-clases-estructura-2",
  storageBucket: "base-clases-estructura-2.appspot.com",
  messagingSenderId: "37794559966",
  appId: "1:37794559966:web:5cbd390fbed95efd1c0f4f",
  measurementId: "G-03260NZ2T1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBmM-YYwhvDuAl-8rQz3ow1vOalgTZNgjc",
  authDomain: "gestionstagiaire-66b8d.firebaseapp.com",
  projectId: "gestionstagiaire-66b8d",
  storageBucket: "gestionstagiaire-66b8d.appspot.com",
  messagingSenderId: "163762955054",
  appId: "1:163762955054:web:c9c2434368137fdcc0d0bf",
  measurementId: "G-8K6BYTKVSS"
};


const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);


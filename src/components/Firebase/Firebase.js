import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCKO3tKa893f24VKlEja6ApelzeRB_Ki4M",
    authDomain: "my-app-e-commerce.firebaseapp.com",
    projectId: "my-app-e-commerce",
    storageBucket: "my-app-e-commerce.appspot.com",
    messagingSenderId: "472165092904",
    appId: "1:472165092904:web:dbb4e1ee0da01d3c076f1d"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
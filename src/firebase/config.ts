// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { IFirebaseConfig } from "../ts/interfaces/IFirebase/IFirebaseConfig";

// Your web app's Firebase configuration
export const firebaseConfig: IFirebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN as string,
    projectId: process.env.REACT_APP_PROJECT_ID as string,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET as string,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID as string,
    appId: process.env.REACT_APP_ID as string
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore();
export const collectionRef = collection(db, "users");
export const storage = getStorage(app);

export default app;
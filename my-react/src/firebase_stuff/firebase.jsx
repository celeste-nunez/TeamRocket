import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAAycBPStBZDz2LKgRi5pbisa9cfUf4xmc",
    authDomain: "habitlings.firebaseapp.com",
    projectId: "habitlings",
    storageBucket: "habitlings.firebasestorage.app",
    messagingSenderId: "315129447224",
    appId: "1:315129447224:web:0e74d66a92c15253f077cd",
    measurementId: "G-0B6FCN2389"
});

const analytics = getAnalytics(app);
const app = initializeApp(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db};


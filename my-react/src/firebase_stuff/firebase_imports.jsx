// add firebase App initlizationg, basically connect your firebase App to the website
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// retrieve authentication extraction and database connection 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// firebase initlization connection
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAAycBPStBZDz2LKgRi5pbisa9cfUf4xmc",
    authDomain: "habitlings.firebaseapp.com",
    projectId: "habitlings",
    storageBucket: "habitlings.firebasestorage.app",
    messagingSenderId: "315129447224",
    appId: "1:315129447224:web:0e74d66a92c15253f077cd",
    measurementId: "G-0B6FCN2389"
});

// prep the authentication and database variables
// const analytics = getAnalytics(firebaseApp);
// const app = initializeApp(firebaseApp);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// export authentication and the database
export { auth, db};


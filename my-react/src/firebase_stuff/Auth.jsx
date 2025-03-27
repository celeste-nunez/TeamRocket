
import { auth } from "./firebase_imports";
import {  GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

    const googleProvider = new GoogleAuthProvider();

    

    export const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert("Google Sign-In Success!");
        } catch (error) {
            handleAuthError(error);
        }
    }; 

    export const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out!");
        } catch (error) {
            handleAuthError(error);
        }
    };

    const handleAuthError = (error) => {
        let message = "An error occurred. Please try again.";
        if (error.code === "auth/email-already-in-use") {
            message = "This email is already in use. Try logging in.";
        } else if (error.code === "auth/invalid-email") {
            message = "Invalid email format.";
        } else if (error.code === "auth/weak-password") {
            message = "Password should be at least 6 characters.";
        } else if (error.code === "auth/wrong-password") {
            message = "Incorrect password. Try again.";
        }
        alert(message);
    };
    





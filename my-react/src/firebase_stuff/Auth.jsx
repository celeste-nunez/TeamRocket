// import React, {useState} from "react";
import { authFromFirebase } from "./firebase";
import {  GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const googleProvider = new GoogleAuthProvider();

    

    export const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(authFromFirebase, googleProvider);
            alert("Google Sign-In Success!");
        } catch (error) {
            handleAuthError(error);
        }
    }; 

    export const handleLogout = async () => {
        try {
            await signOut(authFromFirebase);
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
    





// add the home page's CSS
import './Homepage.css'
//add the hero image/banner
import heroImage from "./assets/habitling-pic.jpg";
//add the footer nav bar HTML
import NavBar from './Components/NavBar';
//add the auth constant from firebase (auth is gained through firebase, not our code)
import {auth} from "./firebase_stuff/firebase_imports"
// add the google sign in variable setter + logout from the Auth jsx file
import {handleGoogleSignIn, handleLogout} from "./firebase_stuff/Auth"

// let the user log in and out
function logInOut () {
    // if the user exists (aka they're logged in) 
    // call the logout function from Auth
    if(auth.currentUser) { 
        handleLogout()
        console.log("I tried to log out")
    } 
    // if there is no user, call the sign in function, also from Auth
    else {
        handleGoogleSignIn()
        console.log("I tried to log in")
       }
    
}

// create the HTML for the home page, using the previously generated/imported functions and variables
function HomePage() {
    return(
        <>
            <NavBar/>
            <div className="hero">
                <img className="hero-img" src={heroImage}></img>
                <div className="hero-txt">
                    <h1 className="hero-title">Habitlings</h1>
                    <h1 className="hero-subtext">Your routines live here</h1>
                    <button onClick={logInOut} className="hero-button nav-opt">Log In/ Out</button>
                </div>
            </div>
        </>
    );
}

// export the home page
export default HomePage;

import './Homepage.css'
import heroImage from "./assets/habitling-pic.jpg";
import NavBar from './Components/NavBar';
import {auth} from "./firebase_stuff/firebase_imports"
import {handleGoogleSignIn, handleLogout} from "./firebase_stuff/Auth"

function logInOut () {
    if(auth.currentUser) { 
        handleLogout()
        console.log("I tried to log out")
    } 
    else {
        handleGoogleSignIn()
        console.log("I tried to log in")
       }
    
}

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

export default HomePage;

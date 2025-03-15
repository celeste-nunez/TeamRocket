import './Homepage.css'
import heroImage from "./assets/habitling-pic.jpg";
function HomePage() {
    return(
        <div className="hero">
            <img className="hero-img" src={heroImage}></img>
            <div className="hero-txt">
                <h1 className="hero-title">New YOU</h1>
                <h1 className="hero-subtext">Shouldn't wait for a new year.</h1>
                <button className="hero-button nav-opt">Log In</button>
            </div>
        </div>
    );
}

export default HomePage;

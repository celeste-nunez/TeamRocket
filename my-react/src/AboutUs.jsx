// import the Card functions for Card.jsx and React from system
import React from "react";
import Card from "./Card";

import josephImage from "./assets/josephImage.jpg"; 
import holdenImage from "./assets/holdenImage.jpeg"; 
import tessaImage from "./assets/tessaImage.jpg";
import isaiahImage from "./assets/isaiahImage.jpeg";
import hannahImage from "./assets/hannahImage.jpg";
import jacobImage from "./assets/jacobImage.jpeg";
import celesteImage from "./assets/celesteImage.jpeg";

// create and return the about us html tags
function AboutUs() {
    return (
        <div className="app-container">
            <h1>About Us</h1>
            <p>
                Welcome to Habitlings, where building better habits becomes a fun and rewarding adventure!
                We believe that forming positive habits shouldn't feel like a chore. That’s why we’ve combined 
                the power of habit tracking with the joy of caring for virtual pets. Every goal you set, 
                every task you complete, and every streak you maintain helps your pet grow, evolve, and thrive—turning 
                self-improvement into a game you’ll actually enjoy!
            </p>

            <h2>Our Mission</h2>
            <p>
                At Habitlings, we’re passionate about making personal growth exciting and sustainable. 
                Whether you're aiming to drink more water, exercise regularly, or read daily, we want to help 
                you build habits that stick—one virtual pet at a time.
            </p>

            <h2>Join the Journey</h2>
            <p>
                Start your adventure today and turn your goals into a game! Your pet is waiting—are you ready to grow together?
            </p>

            <Card
                profile_picture={holdenImage}
                name="Holden Turman"
                description=""
                githubLink="https://github.com/HoldenTurman"
                linkedinLink="https://www.linkedin.com/in/holdenturman/"
            />
            <Card
                profile_picture={tessaImage}
                name=""
                description="UI/UX Designer | Figma | Adobe XD"
                githubLink="https://github.com/TDashner"
                linkedinLink="https://www.linkedin.com/in/tessa-dashner-398766260/"
            />
            <Card
                profile_picture={isaiahImage}
                name="Isaiah Carrin"
                description=""
                githubLink="https://github.com/iCarrin"
                linkedinLink="http://www.linkden.com/in/isaiah-carrin"
            />
            <Card
                profile_picture={hannahImage}
                name="Hannah Crenshaw"
                description=""
                githubLink="https://github.com/PinkCheetah1"
                linkedinLink="https://www.linkedin.com/in/hannah-crenshaw-989522359"
            />
            <Card
                profile_picture={jacobImage}
                name="Jacob Emhoff"
                description="Firebase | Scrum Master | Assistant to Misc."
                githubLink="https://github.com/AquaSlime66"
                linkedinLink="https://www.linkedin.com/in/jacob-emhoff-52462a308/"
            />
            <Card
                profile_picture={josephImage}
                name="Joseph Norales"
                description="React | Web Designer | Scrum Master"
                githubLink="https://github.com/nor23019"
                linkedinLink="https://www.linkedin.com/in/joseph-norales-30837b30a/"
            />
            <Card
                profile_picture={celesteImage}
                name="Celeste Wahlquist"
                description=""
                githubLink="https://github.com/celeste-nunez"
                linkedinLink="https://www.linkedin.com/notifications/?filter=all"
            />
        </div>
    );
}

export default AboutUs;
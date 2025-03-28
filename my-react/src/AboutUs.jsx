import React from "react";
import Card from "./Card";

import josephImage from "./assets/josephImage.jpg"; 
import holdenImage from "./assets/holdenImage.jpeg"; 

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
                description="UI/UX Designer | Figma | Adobe XD"
                githubLink="https://github.com/HoldenTurman"
                linkedinLink="https://www.linkedin.com/in/holdenturman/"
            />
            <Card
                profile_picture={josephImage}
                name="Joseph Norales"
                description="UI/UX Designer | Figma | Adobe XD"
                githubLink="https://github.com/nor23019"
                linkedinLink="https://www.linkedin.com/notifications/?filter=all"
            />
            <Card
                profile_picture={josephImage}
                name="Joseph Norales"
                description="UI/UX Designer | Figma | Adobe XD"
                githubLink="https://github.com/nor23019"
                linkedinLink="https://www.linkedin.com/notifications/?filter=all"
            />
            <Card
                profile_picture={josephImage}
                name="Joseph Norales"
                description="UI/UX Designer | Figma | Adobe XD"
                githubLink="https://github.com/nor23019"
                linkedinLink="https://www.linkedin.com/notifications/?filter=all"
            />
            <Card
                profile_picture={josephImage}
                name="Joseph Norales"
                description="UI/UX Designer | Figma | Adobe XD"
                githubLink="https://github.com/nor23019"
                linkedinLink="https://www.linkedin.com/notifications/?filter=all"
            />
            <Card
                profile_picture={josephImage}
                name="Joseph Norales"
                description="React | Web Designer"
                githubLink="https://github.com/nor23019"
                linkedinLink="https://www.linkedin.com/notifications/?filter=all"
            />

        </div>
    );
}

export default AboutUs;

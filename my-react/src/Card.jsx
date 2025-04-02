//import react from system, downloaded along with React
import React from "react";
//add the prop-types node/react module (also from the system)
import PropTypes from "prop-types";
//add the Card styles sheet
import "./Card.css";
//add github and linkedin icon images
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";

// generates the HTML for html for each card, majority is just HTML organization, see line 27 for button details 
function Card({ profile_picture, name, description, githubLink, linkedinLink }) {
  return (
    <div className="card">
      <img
        src={profile_picture}
        className="profile-picture"
        alt={`Profile picture of ${name}`}
      />

      <h2 className="title">{name}</h2>

      <p className="text">{description}</p>

      <div className="button-container">
 {/* when the button is clicked it opens either github or linkedin */}
        <button
          className="button"
          onClick={() => window.open(githubLink, "_blank")}
          aria-label={`View ${name}'s GitHub profile`}
        >
          <img src={githubIcon} className="icon" alt="GitHub logo linking to profile" />
        </button>

{/* linkedin button */}
        <button
          className="button"
          onClick={() => window.open(linkedinLink, "_blank")}
          aria-label={`View ${name}'s LinkedIn profile`}
        >
          <img src={linkedinIcon} className="icon" alt="LinkedIn logo linking to profile" />
        </button>
      </div>
    </div>
  );
}

// Prop Validation
//ensures that the types displated as a card are strings and exist
Card.propTypes = {
  profile_picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
};

// Default Props (Failsafe for missing props)
//auto-fills the cards if an empty one is discovered
Card.defaultProps = {
  profile_picture: "https://via.placeholder.com/150",
  name: "Unknown User",
  description: "No description available.",
  githubLink: "#",
  linkedinLink: "#",
};

//export the Card FUNCTION
export default Card;

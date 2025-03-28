import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import githubIcon from "./assets/github.png";
import linkedinIcon from "./assets/linkedin.png";

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
        <button
          className="button"
          onClick={() => window.open(githubLink, "_blank")}
          aria-label={`View ${name}'s GitHub profile`}
        >
          <img src={githubIcon} className="icon" alt="GitHub logo linking to profile" />
        </button>

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
Card.propTypes = {
  profile_picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
};

// Default Props (Failsafe for missing props)
Card.defaultProps = {
  profile_picture: "https://via.placeholder.com/150",
  name: "Unknown User",
  description: "No description available.",
  githubLink: "#",
  linkedinLink: "#",
};

export default Card;

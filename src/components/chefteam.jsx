import PropTypes from "prop-types";
import React from "react";
export const Team = ({ image, name, description }) => (
  <>
    <div className="team-card">
      <img src={image} alt="" srcset="" />
      <div className="team-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  </>
);
Team.prototype = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

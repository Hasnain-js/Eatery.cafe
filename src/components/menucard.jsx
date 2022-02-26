import PropTypes from "prop-types";
import React from "react";
export const Menucard = ({ image, name, items, price }) => (
  // image thumb are a column
  <div className="image-thumb">
    <img src={image} />
    <div className="image-details">
      <div className="image-info">
        <h3>{name}</h3>
        <p>{items}</p>
      </div>
      <span>${price}</span>
    </div>
  </div>
);
Menucard.prototype = {
  image: PropTypes.string,
  name: PropTypes.string,
  items: PropTypes.string,
  price: PropTypes.string,
};

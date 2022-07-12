import React from "react";

export const CheckBox = () => {
  return (
    <div className="checkbox-wrapper">
      <input className="darkmode-input" type="checkbox" id="switch" />
      <label for="switch" className="darkmode-label"></label>
    </div>
  );
};

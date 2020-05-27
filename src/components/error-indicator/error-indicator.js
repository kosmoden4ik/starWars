import React from "react";
import "./error-indicator.css";
import icon from "./star.png";
const ErrorIndicator = () => {
  console.log(
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
  );

  return (
    <div>
      <img src={icon} alt="Error Icon" />
      <span>BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};
export default ErrorIndicator;

import React from "react";

import "./StyledButton.scss";

export const StyledButton = ({ className, label }) => {
  return (
    <div className={`styled_button ${className}`}>
      <span>{label}</span>
    </div>
  );
};

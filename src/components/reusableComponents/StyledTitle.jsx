import React from "react";

import "./StyledTitle.scss";
import { StyledButton } from "./StyledButton";

export const StyledTitle = ({
  preTitleContent,
  titleContent,
  className,
  stripe,
  button,
}) => {
  return (
    <div className={`sections_title ${className}`}>
      <span className="pre_title">{preTitleContent}</span>
      <div>
        <span className="title">{titleContent}</span>
        {stripe && <span className="stripe_title" />}
      </div>
      {button && <StyledButton label="Know More" />}
    </div>
  );
};

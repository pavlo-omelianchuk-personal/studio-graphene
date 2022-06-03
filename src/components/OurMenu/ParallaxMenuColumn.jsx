import React from "react";
import { StyledButton } from "../reusableComponents/StyledButton";

export const ParallaxDishes = ({ menuItem }) => {
  return (
    <div className="dish">
      <div className="dish_title">{menuItem.title}</div>
      <div className="dish_description">{menuItem.description}</div>
      <StyledButton label={`£${menuItem.price}`} className="dish_button" />
    </div>
  );
};

import React from "react";

import "./Navigation.scss";

const NavItem = ({ className, content }) => {
  return <li className={className}>{content}</li>;
};

const navItemsLeft = [
  { content: "Logo", className: "nav_item nav_logo" },
  { content: "About", className: "nav_item " },
  { content: "Comunity", className: "nav_item " },
  { content: "Location", className: "nav_item " },
  { content: "Our menu", className: "nav_item " },
  { content: "Recipes", className: "nav_item " },
];
const navItemsRight = [
  { content: "Contact", className: "nav_item" },
  { content: "Login", className: "nav_item" },
];

export const Navigation = () => {
  return (
    <nav className="nav_wrapper">
      <ul className="nav">
        <div className="nav_left">
          {navItemsLeft.map((navItem, index) => (
            <NavItem
              key={index}
              className={navItem.className}
              content={navItem.content}
            />
          ))}
        </div>
        <div className="nav_right">
          {navItemsRight.map((navItem, index) => (
            <NavItem
              key={index}
              className={navItem.className}
              content={navItem.content}
            />
          ))}
        </div>
      </ul>
    </nav>
  );
};

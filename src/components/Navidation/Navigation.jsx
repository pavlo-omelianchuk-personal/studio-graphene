import React from "react";

import "./Navigation.scss";

const NavItem = ({ className, content }) => {
  return <li className={className}>{content}</li>;
};

const navItems = [
  { content: "Logo", className: "nav_item nav_logo" },
  { content: "About", className: "nav_item nav_left" },
  { content: "Comunity", className: "nav_item nav_left" },
  { content: "Location", className: "nav_item nav_left" },
  { content: "Our menu", className: "nav_item nav_left" },
  { content: "Recipes", className: "nav_item nav_left" },
  { content: "", className: "nav_item empty" },
  { content: "", className: "nav_item empty" },
  { content: "", className: "nav_item empty" },
  { content: "Contact", className: "nav_item nav_right" },
  { content: "Login", className: "nav_item nav_right" },
];

export const Navigation = () => {
  return (
    <nav className="nav_wrapper">
      <ul className="nav">
        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            className={navItem.className}
            content={navItem.content}
          />
        ))}
      </ul>
    </nav>
  );
};

import React from "react";

import "./Navigation.scss";

const NavItem = ({ className, content, linkTo }) => {
  return (
    <li className={className}>
      <a href={`#${linkTo}`}>{content}</a>
    </li>
  );
};

const navItemsLeft = [
  { content: "Logo", linkTo: "home", className: "nav_item nav_logo" },
  { content: "About", linkTo: "about", className: "nav_item " },
  { content: "Comunity", linkTo: "community", className: "nav_item " },
  { content: "Location", linkTo: "location", className: "nav_item " },
  { content: "Our menu", linkTo: "our_menu", className: "nav_item " },
  { content: "Recipes", linkTo: "recipes", className: "nav_item " },
];
const navItemsRight = [
  { content: "Contact", linkTo: "contact", className: "nav_item" },
  { content: "Login", linkTo: "login", className: "nav_item" },
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
              linkTo={navItem.linkTo}
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

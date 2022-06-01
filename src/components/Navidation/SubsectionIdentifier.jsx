import React, { useState } from "react";

import "./SubsectionIdentifier.scss";

const SectionIndicator = ({ className, content }) => {
  return (
    <li className={className}>
      <span>{content}</span>
    </li>
  );
};

const sections = [
  { content: "01", className: "nav_section_item active" },
  { content: "02", className: "nav_section_item" },
  { content: "03", className: "nav_section_item" },
  { content: "04", className: "nav_section_item" },
  { content: "05", className: "nav_section_item" },
  { content: "06", className: "nav_section_item" },
];

export const SectionIndicators = () => {
  const [visibilityState /*, setVisibilityState*/] = useState("");

  return (
    <nav className="nav_section_wrapper">
      <ul className="nav_section">
        {sections.map((navItem, index) => (
          <SectionIndicator
            key={index}
            className={`${navItem.className} ${visibilityState}`}
            content={navItem.content}
          />
        ))}
      </ul>
    </nav>
  );
};

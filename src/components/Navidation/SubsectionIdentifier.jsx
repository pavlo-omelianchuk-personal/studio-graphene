import React from "react";
import { useSectionVisibility } from "../utils/appContext";

import "./SubsectionIdentifier.scss";

const SectionIndicator = ({ className, content }) => {
  return (
    <li className={className}>
      <span>{content}</span>
    </li>
  );
};

export const SectionIndicators = () => {
  const {
    section1Visibility,
    section2Visibility,
    section3Visibility,
    section4Visibility,
    section5Visibility,
    section6Visibility,
  } = useSectionVisibility();

  const sections = [
    { content: "01", className: `nav_section_item ${section1Visibility}` },
    { content: "02", className: `nav_section_item ${section2Visibility}` },
    { content: "03", className: `nav_section_item ${section3Visibility}` },
    { content: "04", className: `nav_section_item ${section4Visibility}` },
    { content: "05", className: `nav_section_item ${section5Visibility}` },
    { content: "06", className: `nav_section_item ${section6Visibility}` },
  ];

  return (
    <nav className="nav_section_wrapper">
      <ul className="nav_section">
        {sections.map((navItem, index) => (
          <SectionIndicator
            key={index}
            className={`${navItem.className}`}
            content={navItem.content}
          />
        ))}
      </ul>
    </nav>
  );
};

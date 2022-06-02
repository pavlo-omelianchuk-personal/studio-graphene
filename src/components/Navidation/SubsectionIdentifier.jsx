import React, { useEffect } from "react";
import { useScrollDirection } from "react-use-scroll-direction";
import { useSectionVisibility } from "../utils/appContext";

import "./SubsectionIdentifier.scss";

const SectionIndicator = ({ className, content }) => {
  const [direction, setDirection] = React.useState(String);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  useEffect(() => {
    isScrollingDown && setDirection("down");
    isScrollingUp && setDirection("up");
  }, [isScrollingDown, isScrollingUp]);
  
  return (
    <li className={className}>
      <span
        className={
          direction === "up"
            ? "nav_section_item_content_up"
            : direction === "down"
            ? "nav_section_item_content_down"
            : "nav_section_item_content_up"
        }
      >
        {content}
      </span>
    </li>
  );
};

export const SectionIndicators = () => {
  const {
    isVisibleSection1,
    isVisibleSection2,
    isVisibleSection3,
    isVisibleSection4,
    isVisibleSection5,
    isVisibleSection6,
  } = useSectionVisibility();

  const sections = [
    {
      content: "01",
      className: `nav_section_item ${isVisibleSection1}`,
    },
    { content: "02", className: `nav_section_item ${isVisibleSection2}` },
    { content: "03", className: `nav_section_item ${isVisibleSection3}` },
    { content: "04", className: `nav_section_item ${isVisibleSection4}` },
    { content: "05", className: `nav_section_item ${isVisibleSection5}` },
    { content: "06", className: `nav_section_item ${isVisibleSection6}` },
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

import React, { useEffect } from "react";
import { Navigation } from "../Navidation/Navigation";
import { SectionIndicators } from "../Navidation/SubsectionIdentifier";
import { HomeLogo } from "./HomeLogo";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import image from "../../assets/main.webp";
import "./Home.scss";
import { StyledButton } from "../reusableComponents/StyledButton";

export const Home = () => {
  const [ref, entry] = useIntersect({});
  const { setIsVisibleSection1 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection1(isActive);
  }, [setIsVisibleSection1, entry.isIntersecting]);

  return (
    <section id="home" className="home_wrapper" ref={ref}>
      <SectionIndicators />
      <Navigation />
      <StyledButton className="request_info" label="Request Info" />
      <img src={image} alt="Healthy food" className="home_image" />
      <div className="home_message_wrapper">
        <HomeLogo />
        <h1 className="home_message">
          <span className="home_message__pre_main">The Best Foodie</span>{" "}
          <span className="home_message__main">Experience</span>{" "}
          <span className="home_message__secondary">now in London</span>
        </h1>
      </div>
    </section>
  );
};

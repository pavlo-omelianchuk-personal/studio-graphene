import React from "react";
import image from "../../assets/pexels-lukas-616401.webp";
import { Navigation } from "../Navidation/Navigation";
import { SectionIndicators } from "../Navidation/SubsectionIdentifier";

import "./Home.scss";
import { HomeLogo } from "./HomeLogo";

export const Home = ({ className, ref }) => {
  return (
    <section className={className} ref={ref}>
      <SectionIndicators />
      <Navigation />
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

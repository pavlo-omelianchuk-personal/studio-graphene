import React from "react";

import image from "../../assets/pexels-lukas-616401.webp";
import { Navigation } from "../Navidation/Navigation";
import { SectionIndicators } from "../Navidation/SubsectionIdentifier";
import useIntersect from "../utils/useIntersection";

import "./Home.scss";
import { HomeLogo } from "./HomeLogo";
import { RequestInfo } from "./RequestInfo";

export const Home = ({ className }) => {
  const [ref, entry] = useIntersect({});

  console.log("in viewport OOO:", entry.isIntersecting);

  return (
    <section className={className} ref={ref}>
      <SectionIndicators />
      <Navigation />
      <RequestInfo />
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

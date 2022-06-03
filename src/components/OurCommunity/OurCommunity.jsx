import React, { useEffect } from "react";
import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import { StyledTitle } from "../reusableComponents/StyledTitle/StyledTitle";
import { InstaPhoto } from "../reusableComponents/InstaPhoto/InstaPhoto";
import { InstaMessage } from "../reusableComponents/InstaMessage/InstaMessage";

import imageOne from "../../assets/pexels-daria-shevtsova-704569.webp";
import imageTwo from "../../assets/pexels-lisa-fotios-1351238.webp";
import imageThree from "../../assets/pexels-valeria-boltneva-1893556.webp";
import detail01 from "../../assets/detail01.png";
import detail02 from "../../assets/detail02.png";
import detail03 from "../../assets/detail03.png";

import "./OurCommunity.scss";

export const OurCommunity = () => {
  const [ref, entry] = useIntersect({});

  const { setIsVisibleSection2 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection2(isActive);
  }, [setIsVisibleSection2, entry.isIntersecting]);

  return (
    <div id="community" className="community" ref={ref}>
      <div className="row_one row_one_left">
        <StyledTitle
          preTitleContent="Meet Our"
          titleContent="Community"
          className="our_community_title"
          stripe
          button
        />
        <div className="community_special_subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          excepturi
        </div>
      </div>
      <div className="row_one row_one_right">
        <img src={detail01} className="detail01" />
        <img src={detail02} className="detail02" />

        <div className="inside_flex_arrange">
          <InstaPhoto image={imageOne} />
          <InstaMessage
            instaMessageTitle={"@buzzfeedfood"}
            instaMessage={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure. Non laboriosam a, eaque vitae ipsum nam vel voluptate dignissimos illum harum adipisci dolores repellendus!"
            }
            comments={"152K"}
            likes={"18.2K"}
          />
        </div>
      </div>
      <div className="row_two row_two_left">
        <img src={detail03} className="detail03" />
        <div className="inside_flex_arrange">
          <InstaMessage
            instaMessageTitle={"@food_lover"}
            instaMessage={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure. Non laboriosam a, "
            }
            comments={"152K"}
            likes={"18.2K"}
          />
          <InstaPhoto image={imageTwo} />
        </div>
      </div>
      <div className="row_three row_three_left">
        <div className="community_description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          repellat et omnis alias aut incidunt repellendus ratione odit nisi, id
          est. Fugit quaerat possimus repellat.
        </div>
      </div>
      <div className="row_three row_three_right">
        <div className="inside_flex_arrange">
          <InstaMessage
            instaMessageTitle={"@buzzfeedfood"}
            instaMessage={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iure. Non laboriosam a, eaque vitae ipsum nam vel voluptate dignissimos illum harum adipisci dolores repellendus!"
            }
            comments={"152K"}
            likes={"18.2K"}
          />
          <InstaPhoto image={imageThree} />
        </div>
      </div>
    </div>
  );
};

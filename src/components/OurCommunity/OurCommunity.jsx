import React, { useEffect, useState } from "react";
import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";
import { Parallax } from "react-scroll-parallax";

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

  const { isVisibleSection2, setIsVisibleSection2 } = useSectionVisibility();
  const [isVisibleCommunityBlock1, setIsVisibleCommunityBlock1] =
    useState(false);
  const [isVisibleCommunityBlock2, setIsVisibleCommunityBlock2] =
    useState(false);
  const [isVisibleCommunityBlock3, setIsVisibleCommunityBlock3] =
    useState(false);

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection2(isActive);
  }, [setIsVisibleSection2, entry.isIntersecting]);

  console.log(isVisibleSection2);

  const raisingStyle1 = isVisibleCommunityBlock1 ? "raising" : "";
  const raisingStyle2 = isVisibleCommunityBlock2 ? "raising" : "";
  const raisingStyle3 = isVisibleCommunityBlock3 ? "raising" : "";

  return (
    <div id="community" className="community" ref={ref}>
      {/* row_one_left */}
      <div className="row_one_left">
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
      {/* row_one_right */}
      <Parallax
        onEnter={() => setIsVisibleCommunityBlock1(true)}
        onExit={() => setIsVisibleCommunityBlock1(false)}
        className={`row_one_right ${raisingStyle1}`}
      >
        <img alt="" src={detail01} className="detail01" />
        <img alt="" src={detail02} className="detail02" />

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
      </Parallax>
      {/* row_two_left */}
      <Parallax
        onEnter={() => setIsVisibleCommunityBlock2(true)}
        onExit={() => setIsVisibleCommunityBlock2(false)}
        className={`row_two_left ${raisingStyle2}`}
      >
        <img alt="" src={detail03} className="detail03" />
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
      </Parallax>
      {/* row_two_right */}
      <Parallax
        onEnter={() => setIsVisibleCommunityBlock2(true)}
        onExit={() => setIsVisibleCommunityBlock2(false)}
        className={`row_two_right ${raisingStyle2}`}
      >
        <div className="community_description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          repellat et omnis alias aut incidunt repellendus ratione odit nisi, id
          est. Fugit quaerat possimus repellat.
        </div>
      </Parallax>
      {/* row_three_left */}
      <Parallax
        onEnter={() => setIsVisibleCommunityBlock3(true)}
        onExit={() => setIsVisibleCommunityBlock3(false)}
        className={`row_three_left ${raisingStyle3}`}
      >
        <div className="community_description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
          repellat et omnis alias aut incidunt repellendus ratione odit nisi, id
          est. Fugit quaerat possimus repellat.
        </div>
      </Parallax>
      {/* row_three_right */}
      <Parallax
        className={`row_three_right ${raisingStyle3}`}
      >
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
      </Parallax>
    </div>
  );
};

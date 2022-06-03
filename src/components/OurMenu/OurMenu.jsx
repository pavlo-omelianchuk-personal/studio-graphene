import React, { useEffect, useState, useRef } from "react";

import { Parallax } from "react-scroll-parallax";
import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./OurMenu.scss";
import { StyledTitle } from "../reusableComponents/StyledTitle/StyledTitle";

import { ParallaxDishes } from "./ParallaxMenuColumn";

export const OurMenu = () => {
  const [ref, entry] = useIntersect({});
  const { setIsVisibleSection4 } = useSectionVisibility();
  const [isVisibleMenuBlock, setIsVisibleMenuBlock] = useState(false);
  const [starters, setStarters] = useState([]);
  const [mainCourses, setMainCourses] = useState([]);
  const [sides, setSides] = useState([]);
  const [desserts, setDesserts] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://studiographene-exercise-api.herokuapp.com/foods",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const jsonResult = await result.json();
      jsonResult.map((dish) => {
        switch (dish.type) {
          case "starters":
            setStarters((current) => [...current, dish]);

            break;
          case "main_courses":
            setMainCourses((current) => [...current, dish]);
            break;
          case "sides":
            setSides((current) => [...current, dish]);
            break;
          case "desserts":
            setDesserts((current) => [...current, dish]);
            break;

          default:
            break;
        }
        return dish;
      });
    };
    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection4(isActive);
  }, [setIsVisibleSection4, entry.isIntersecting]);

  const menuSections = ["Starters", "Main Courses", "Sides", "Desserts"];

  return (
    <section id="our_menu" className="our_menu" ref={ref}>
      <StyledTitle
        titleContent="Our Menu"
        className="our_menu_title"
        stripe
        button
      />
      <div className="our_menu_wrapper">
        {menuSections.map((menuType, index) => {
          const parallaxStart = index === 0 || index === 2 ? "450px" : "-160px";
          const parallaxEnd = index === 0 || index === 2 ? "-2500px" : "700px";
          const follingStyle = isVisibleMenuBlock ? "folling" : "";

          return (
            <Parallax
              onEnter={() => setIsVisibleMenuBlock(true)}
              onExit={() => setIsVisibleMenuBlock(false)}
              translateY={[parallaxStart, parallaxEnd]}
              easing="easeInQuad"
              key={index}
            >
              <div
                ref={ref}
                className={`our_menu_block our_menu_block${index} ${follingStyle}`}
              >
                <StyledTitle titleContent={menuType} className="types_title" />
                {index === 0
                  ? starters?.map((menuItem) => {
                      return (
                        <ParallaxDishes key={menuItem.id} menuItem={menuItem} />
                      );
                    })
                  : index === 1
                  ? mainCourses?.map((menuItem) => {
                      return (
                        <ParallaxDishes key={menuItem.id} menuItem={menuItem} />
                      );
                    })
                  : index === 2
                  ? sides?.map((menuItem) => {
                      return (
                        <ParallaxDishes key={menuItem.id} menuItem={menuItem} />
                      );
                    })
                  : desserts?.map((menuItem) => {
                      return (
                        <ParallaxDishes key={menuItem.id} menuItem={menuItem} />
                      );
                    })}
              </div>
            </Parallax>
          );
        })}
      </div>
    </section>
  );
};

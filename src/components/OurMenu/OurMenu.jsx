import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./OurMenu.scss";
import { StyledTitle } from "../reusableComponents/StyledTitle";
import { StyledButton } from "../reusableComponents/StyledButton";

export const OurMenu = () => {
  const [ref, entry] = useIntersect({});
  const { setIsVisibleSection4 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection4(isActive);
  }, [setIsVisibleSection4, entry.isIntersecting]);

  const workArray = ["Starters", "Main Courses", "Sides", "Desserts"];
  return (
    <section className="our_menu" ref={ref}>
      <StyledTitle
        titleContent="Our Menu"
        className="our_menu_title"
        stripe
        button
      />
      <div className="our_menu_wrapper">
        {workArray.map((column, index) => {
          return (
            <div
              className={`our_menu_block our_menu_block${index}`}
              key={index}
            >
              <StyledTitle titleContent={column} className="types_title" />
              <div className="dish">
                <div className="dish_title"> El Classico</div>
                <div className="dish_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  quae atque doloribus modi id deleniti tempore. Laboriosam
                  aliquid ratione totam.
                </div>
                <StyledButton label="£8.95" className="dish_button" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

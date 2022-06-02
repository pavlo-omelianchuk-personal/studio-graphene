import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./Recipes.scss";

export const Recipes = () => {
  const [ref, entry] = useIntersect({});
  const { setSection5Visibility } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setSection5Visibility(isActive);
  }, [setSection5Visibility, entry.isIntersecting]);

  return (
    <section className="recipes" ref={ref}>
      <span>Recipes</span>
    </section>
  );
};

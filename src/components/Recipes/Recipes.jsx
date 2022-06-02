import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./Recipes.scss";

export const Recipes = () => {
  const [ref, entry] = useIntersect({});
  const { setIsVisibleSection5 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection5(isActive);
  }, [setIsVisibleSection5, entry.isIntersecting]);

  return (
    <section className="recipes" ref={ref}>
      <span>Recipes</span>
    </section>
  );
};

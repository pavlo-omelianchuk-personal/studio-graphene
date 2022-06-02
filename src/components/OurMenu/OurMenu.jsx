import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./OurMenu.scss";

export const OurMenu = () => {
  const [ref, entry] = useIntersect({});
  const { setSection4Visibility } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setSection4Visibility(isActive);
  }, [setSection4Visibility, entry.isIntersecting]);

  return (
    <section className="our_menu" ref={ref}>
      <span>OurMenu</span>
    </section>
  );
};

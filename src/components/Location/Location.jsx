import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./Location.scss";

export const Location = () => {
  const [ref, entry] = useIntersect({});
  const { setSection3Visibility } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setSection3Visibility(isActive);
  }, [setSection3Visibility, entry.isIntersecting]);

  return (
    <section className="location" ref={ref}>
      <span>Location</span>
    </section>
  );
};

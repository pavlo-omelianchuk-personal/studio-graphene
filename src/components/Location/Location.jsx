import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./Location.scss";

export const Location = () => {
  const [ref, entry] = useIntersect({});
  const { setIsVisibleSection3 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection3(isActive);
  }, [setIsVisibleSection3, entry.isIntersecting]);

  return (
    <section className="location" ref={ref}>
      <span>Location</span>
    </section>
  );
};

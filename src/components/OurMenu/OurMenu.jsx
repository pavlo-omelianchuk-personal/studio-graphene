import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./OurMenu.scss";

export const OurMenu = () => {
  const [ref, entry] = useIntersect({});
  const { setIsVisibleSection4 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection4(isActive);
  }, [setIsVisibleSection4, entry.isIntersecting]);

  return (
    <section className="our_menu" ref={ref}>
      <span>OurMenu</span>
    </section>
  );
};

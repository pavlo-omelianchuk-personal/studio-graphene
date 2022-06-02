import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./Collaborate.scss";

export const Collaborate = () => {
  const [ref, entry] = useIntersect({});
  const { setIsVisibleSection6 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection6(isActive);
  }, [setIsVisibleSection6, entry.isIntersecting]);

  return (
    <section className="collaborate" ref={ref}>
      <span>Collaborate</span>
    </section>
  );
};

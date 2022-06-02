import React, { useEffect } from "react";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./Collaborate.scss";

export const Collaborate = () => {
  const [ref, entry] = useIntersect({});
  const { setSection6Visibility } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setSection6Visibility(isActive);
  }, [setSection6Visibility, entry.isIntersecting]);

  return (
    <section className="collaborate" ref={ref}>
      <span>Collaborate</span>
    </section>
  );
};

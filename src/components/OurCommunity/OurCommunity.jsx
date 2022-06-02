import React, { useEffect } from "react";
import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./OurCommunity.scss";

export const OurCommunity = () => {
  const [ref, entry] = useIntersect({});

  const { setSection2Visibility } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setSection2Visibility(isActive);
  }, [setSection2Visibility,entry.isIntersecting]);

  return (
    <div className="community" ref={ref}>
      <span>OurCommunity</span>
    </div>
  );
};

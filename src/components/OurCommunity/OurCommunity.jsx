import React, { useEffect } from "react";
import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import "./OurCommunity.scss";

export const OurCommunity = () => {
  const [ref, entry] = useIntersect({});

  const { setIsVisibleSection2 } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setIsVisibleSection2(isActive);
  }, [setIsVisibleSection2,entry.isIntersecting]);

  return (
    <div className="community" ref={ref}>
      <span>OurCommunity</span>
    </div>
  );
};

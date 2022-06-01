import React from "react";
import useIntersect from "../utils/useIntersection";

import "./OurCommunity.scss";

export const OurCommunity = () => {
  const [ref, entry] = useIntersect({});
  console.log("OurCommunity in viewport:", entry.isIntersecting);

  return (
    <div className="community" ref={ref}>
      <span>OurCommunity</span>
    </div>
  );
};

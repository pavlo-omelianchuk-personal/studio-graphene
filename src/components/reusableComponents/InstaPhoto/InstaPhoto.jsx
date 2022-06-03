import React from "react";

import instaLogo from "../../../assets/instagram-btn.svg";
import "./InstaPhoto.scss";

export const InstaPhoto = ({ image, alt }) => {
  return (
    <div className="insta_photo_wrapper">
      <img className="insta_photo" src={image} alt={alt} />
      <img className="insta_logo" src={instaLogo} alt={alt} />
    </div>
  );
};

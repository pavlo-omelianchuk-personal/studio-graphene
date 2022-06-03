import React from "react";

import likeImg from "../../../assets/Group 126.svg";
import commentImg from "../../../assets/Path 80.svg";
import "./InstaMessage.scss";

export const InstaMessage = ({
  instaMessageTitle,
  instaMessage,
  comments,
  likes,
}) => {
  return (
    <div className="insta_message_wrapper">
      <div className="content">
        <div className="title">{instaMessageTitle}</div>
        <div className="message">{instaMessage}</div>
      </div>
      <div className="reactions">
        <div className="comments">
          <img src={commentImg} />
          <span>{comments}</span>
        </div>
        <div className="likes">
          <img src={likeImg} />
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

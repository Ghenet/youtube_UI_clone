import React from "react";
import { Avatar } from "@material-ui/core";

function VideoCard({ image, title, channel, views, timestamp, ChannelImage }) {
  return (
    <div className="videoCard">
      <img src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={ChannelImage}
        />
      </div>
    </div>
  );
}

export default VideoCard;

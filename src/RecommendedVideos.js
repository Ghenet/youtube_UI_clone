import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="It's just me myself & I"
          views="100M views"
          timestamp="2 hrs ago"
          channelImage=""
          channel="Ghenet Kibrom"
          image=""
        />
        {/* <VideoCard /> */}
        <VideoCard
          title="It's just me myself & I"
          views="100M views"
          timestamp="2 hrs ago"
          channelImage=""
          channel="Ghenet Kibrom"
          image=""
        />
        <VideoCard
          title="It's just me myself & I"
          views="100M views"
          timestamp="2 hrs ago"
          channelImage=""
          channel="Ghenet Kibrom"
          image=""
        />
        <VideoCard
          title="It's just me myself & I"
          views="100M views"
          timestamp="2 hrs ago"
          channelImage=""
          channel="Ghenet Kibrom"
          image=""
        />
        <VideoCard
          title="It's just me myself & I"
          views="100M views"
          timestamp="2 hrs ago"
          channelImage=""
          channel="Ghenet Kibrom"
          image=""
        />
        <VideoCard
          title="It's just me myself & I"
          views="100M views"
          timestamp="2 hrs ago"
          channelImage=""
          channel="Ghenet Kibrom"
          image=""
        />
        <VideoCard
          title="It's just me myself & I"
          views="100M views"
          timestamp="2 hrs ago"
          channelImage=""
          channel="Ghenet Kibrom"
          image=""
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;

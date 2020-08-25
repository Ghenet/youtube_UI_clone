import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJw84jaeCGDeXXau38GqfsCcy5mo9aq1ru3c1rPnag=s100-c-k-c0xffffffff-no-rj-mo"
        channel="Meghan Trainor"
        verified
        subs="11.2M"
        noOfVideos={400}
        description="Underrated Best singer"
      />

      <hr />
      <VideoRow
        views="20.1M"
        subs="12M"
        description="Nice to Meet ya is a cool song about how not nice it is to meet ya"
        timestamp="6 months ago"
        channel="Clever Programmer"
        title="Nice to meet ya"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSK7pjgwWBy7Ldydffx6k4siBY4PzhD5zUHHw&usqp=CAU"
      />
    </div>
  );
}

export default SearchPage;

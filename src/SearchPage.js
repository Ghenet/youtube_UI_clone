import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";

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
        Channel="Meghan Trainor"
        verified
        subs="11.2M"
        noOfVideos={400}
        description="Underated Best singer"
      />
    </div>
  );
}

export default SearchPage;

import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  const loop = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a-/AOh14GhdT3K0jCJEsFu4zcp1_wc57L3fQDWV9bF_51gq=s288-c-k-c0xffffffff-no-rj-mo"
        channel="Naan From Chennai"
        verified
        subs="200"
        noOfVideos={382}
        description="Fun content only Fun content onlyFun content onlyFun content onlyFun content onlyFun content only"
      />
      <hr />
      {loop.map(() => (
        <VideoRow
          views="1.1M"
          subs="200"
          description="Fun Content Only Fun Content Only Fun Content Only Fun Content Only Fun Content Only Fun Content Only "
          timestamp="2 Days ago"
          channel="Naan From Chennai"
          title="Dark history of india the sati practice | இந்தியாவின் கருப்புபக்கங்கள் | NFCTamil | 20"
          image="https://i.ytimg.com/vi/FWBrrXP5_Ag/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLANNKVvQJDfbYxtv41sZTZwlEoHnw"
          videoId="g8yGxDMyGiE"

        />
      ))}
    </div>
  );
}

export default SearchPage;

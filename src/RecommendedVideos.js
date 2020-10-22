import React from "react";
import "./RecommendedVideos.css";
import Video from "./Video";


function RecommendedVideos() {
  const loop = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  return (
    <div className="recommendedvideos">
      <h2>Recommended</h2>
      <div className="recommendedvideos__videos">
        {loop.map(() => (
          <Video
            image="https://i.ytimg.com/vi/FWBrrXP5_Ag/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLANNKVvQJDfbYxtv41sZTZwlEoHnw"
            title="Dark history of india the sati practice | இந்தியாவின் கருப்புபக்கங்கள் | NFCTamil | 20"
            channel="Naan From Chennai"
            timestamp="1 Month ago"
            views="110 Views"
            channelImage="https://yt3.ggpht.com/a-/AOh14GhdT3K0jCJEsFu4zcp1_wc57L3fQDWV9bF_51gq=s288-c-k-c0xffffffff-no-rj-mo"
            videoId="g8yGxDMyGiE"
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;

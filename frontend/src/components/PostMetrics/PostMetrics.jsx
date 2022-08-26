import React from "react";

import Navbar from "./Navbar";
import PeriodStatistics from "./PeriodStatistics";
import Profanities from "./Profanities";
import Contributor from "./Contributor";
import TotalPosts from "./TotalPosts";
import TotalUniquePublishers from "./TotalUniquePublishers";
import TotalPages from "./TotalPages";
import PostActivity from "./PostActivity";
import TotalLikeDislike from "./TotalLikeDislike";
import ViralPosts from "./ViralPosts";
import PopularWords from "./PopularWords";
import PostByChannel from "./PostByChannel";

function Metrics() {
  return (
    <div className="metrics">
      {/* <Navbar /> */}
      <div className="grid-zero">
        <TotalPosts />
        <TotalUniquePublishers />
        <TotalPages />
        <TotalLikeDislike />
      </div>
      <div className="grid-one">
        <PeriodStatistics />
        <PostActivity />
      </div>
      <div className="grid-two">
        <ViralPosts />
        <Contributor />
        <PostByChannel />
        <PopularWords />
      </div>
      <div className="grid-three">
        <Profanities />
      </div>
    </div>
  );
}

export default Metrics;

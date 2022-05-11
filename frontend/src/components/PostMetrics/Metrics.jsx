import React from "react";

import Navbar from "./Navbar";
import PeriodMetric from "./PeriodMetric";
import ProfanityMetric from "./ProfanityMetric";
import TrendingUsers from "./TrendingUsers";
import TotalPosts from "./TotalPosts";
import TotalUniquePublishers from "./TotalUniquePublishers";
import TotalPages from "./TotalPages";
import PostActivity from "./PostActivity";
import TotalLikeDislike from "./TotalLikeDislike";
import TopPosts from "./TopPosts";
import Keywords from "./Keywords";
import ChannelDistribution from "./ChannelDistribution";

function Metrics() {
  return (
    <div className="metrics">
      <Navbar />
      <div className="grid-zero">
        <TotalPosts />
        <TotalUniquePublishers />
        <TotalPages />
        <TotalLikeDislike />
      </div>
      <div className="grid-one">
        <PeriodMetric />
        <PostActivity />
      </div>
      <div className="grid-two">
        <TopPosts />
        <TrendingUsers />
        <ChannelDistribution />
        <Keywords />
      </div>
      <div className="grid-three">
        <ProfanityMetric />
      </div>
    </div>
  );
}

export default Metrics;

import React from "react";
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

function Metrics(props) {
  return (
    <div className="metrics">
      {/* <Navbar /> */}
      <div className="grid-zero">
        <TotalPosts selectedYear={props.selectedYear} />
        <TotalUniquePublishers selectedYear={props.selectedYear} />
        <TotalPages selectedYear={props.selectedYear} />
        <TotalLikeDislike selectedYear={props.selectedYear} />
      </div>
      <div className="grid-one">
        <PeriodStatistics selectedYear={props.selectedYear} />
        <PostActivity selectedYear={props.selectedYear} />
      </div>
      <div className="grid-two">
        <ViralPosts selectedYear={props.selectedYear} />
        <Contributor selectedYear={props.selectedYear} />
        <PostByChannel selectedYear={props.selectedYear} />
        <PopularWords selectedYear={props.selectedYear} />
      </div>
      <div className="grid-three">
        <Profanities selectedYear={props.selectedYear} />
      </div>
    </div>
  );
}

export default Metrics;

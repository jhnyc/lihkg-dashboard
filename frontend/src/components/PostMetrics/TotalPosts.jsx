import React from "react";
import postStatistics from ".././data/post_statistics.json";

function TotalPosts() {
  const data = postStatistics;

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{data.total_posts} </h1>
        <span>total posts published</span>
      </div>
    </div>
  );
}

export default TotalPosts;
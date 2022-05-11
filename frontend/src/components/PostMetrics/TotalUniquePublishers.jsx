import React from "react";
import postStatistics from ".././data/post_statistics.json";

function TotalUniquePublishers() {
  const data = postStatistics;

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{data.users_with_post} </h1>
        <span>users have published</span>
      </div>
    </div>
  );
}

export default TotalUniquePublishers;

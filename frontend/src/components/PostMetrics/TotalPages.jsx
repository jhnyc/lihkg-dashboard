import React from "react";
import postStatistics from ".././data/post_statistics.json";

function TotalPages() {
  const data = postStatistics;

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{data.reply_pages} </h1>
        <span>pages of comments</span>
      </div>
    </div>
  );
}

export default TotalPages;

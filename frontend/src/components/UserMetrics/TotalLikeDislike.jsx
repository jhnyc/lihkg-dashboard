import React from "react";
import postStatistics from ".././data/post_statistics.json";

function TotalLikeDislike() {
  const data = postStatistics;

  var like = Math.round(postStatistics.like*10/1000000)/10;
  var dislike = Math.round(postStatistics.dislike*10/1000000)/10;


  return (
    <>
      <div className="summary_statistics">
        <div className="summary_statistics__info">
          <h1 style={{ color: "green" }}>{`${like}m`} </h1>
          <span>likes</span>
        </div>
      </div>
      <div className="summary_statistics">
        <div className="summary_statistics__info">
          <h1 style={{ marginLeft: "5%", color: "red" }}>{`${dislike}m`} </h1>
          <span>dislikes</span>
        </div>
      </div>
    </>
  );
}

export default TotalLikeDislike;

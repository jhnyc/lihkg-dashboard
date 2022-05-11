import React from "react";
import topUsers from "../data/top_users.json";
import "./TopFemaleMaleChannel.css";

function TopFemaleMaleChannel() {
  const [sortBy, setSortBy] = React.useState("by_post");

  const data = topUsers.by_post


  return (
    <div className="top_female_male card">
      <div className="top_female_male__info">
        <div>
          <h3>Most Feminine & Masculine Channel</h3>
          <span>Even the most feminine channel is barely 50/50</span>
        </div>
        <div className="top_female_male_container">
          <div className="feminine">
            <h1>50</h1>
            <span>female publishers per 100 posts</span>
            <div id="channel">感情台</div>
          </div>
          <div className="masculine">
            <h1>80</h1>
            <span>male publishers per 100 posts</span>
            <div id="channel">體育台</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFemaleMaleChannel;

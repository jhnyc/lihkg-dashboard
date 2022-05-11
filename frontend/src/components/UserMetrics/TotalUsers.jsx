import React from "react";
import annualUserCount from "../data/annual_user_count.json";

function TotalUsers() {
  const totalUsers = annualUserCount.reduce((total, item) => total + item.user_id, 0);

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{totalUsers} </h1>
        <span>total members as of 31/12/2021</span>
      </div>
    </div>
  );
}

export default TotalUsers;
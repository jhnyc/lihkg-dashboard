import React from "react";
import newSignup from "../data/new_signup_2021.json";

function TotalNewUsers() {
  const data = newSignup;

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{data["2021"]} </h1>
        <span>new sign-ups in 2021</span>
      </div>
    </div>
  );
}

export default TotalNewUsers;

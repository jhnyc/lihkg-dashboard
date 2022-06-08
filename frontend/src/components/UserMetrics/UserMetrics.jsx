import React from "react";
import Navbar from "./Navbar";
import PeriodMetric from "./PeriodMetric";
import TopFemaleMaleChannel from "./TopFemaleMaleChannel";
import TotalUsers from "./TotalUsers";
import TotalNewUsers from "./TotalNewUsers";
import SexRatio from "./SexRatio";
import GenderDistributionByChannel from "./GenderDistributionByChannel";
import MemberScatterPlot from "./MemberScatterPlot";
import AnnualUserGrowth from "./AnnualUserGrowth";

function UserMetrics() {
  return (
    <div className="metrics">
      <Navbar />
      <div className="grid-zero-user">
        <TotalUsers />
        <TotalNewUsers />
        <SexRatio />
      </div>
      <div className="grid-one-user">
        <PeriodMetric />
        <GenderDistributionByChannel />
      </div>
      <div className="grid-two-user">
        <AnnualUserGrowth />
        <MemberScatterPlot />
        <TopFemaleMaleChannel />
      </div>
    </div>
  );
}

export default UserMetrics;

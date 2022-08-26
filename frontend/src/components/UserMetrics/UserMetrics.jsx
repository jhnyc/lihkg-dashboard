import React from "react";
import NewMemberPeriodMetric from "./NewMemberPeriodMetric";
import TopFemaleMaleChannel from "./TopFemaleMaleChannel";
import TotalUsers from "./TotalUsers";
import TotalNewSignups from "./TotalNewSignups";
import GenderRatio from "./GenderRatio";
import GenderDistributionByChannel from "./GenderDistributionByChannel";
import MemberScatterPlot from "./MemberScatterPlot";
import AnnualUserGrowth from "./AnnualUserGrowth";

function UserMetrics() {
  return (
    <div className="metrics">
      <div className="grid-zero-user">
        <TotalUsers />
        <TotalNewSignups />
        <GenderRatio />
      </div>
      <div className="grid-one-user">
        <NewMemberPeriodMetric />
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

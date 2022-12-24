import React from "react";
import NewMemberPeriodMetric from "./NewMemberPeriodMetric";
import TopFemaleMaleChannel from "./TopFemaleMaleChannel";
import TotalUsers from "./TotalUsers";
import TotalNewSignups from "./TotalNewSignups";
import GenderRatio from "./GenderRatio";
import GenderDistributionByChannel from "./GenderDistributionByChannel";
import MemberScatterPlot from "./MemberScatterPlot";
import AnnualUserGrowth from "./AnnualUserGrowth";

function UserMetrics(props) {
  return (
    <div className="metrics">
      <div className="grid-zero-user">
        <TotalUsers selectedYear={props.selectedYear} />{" "}
        <TotalNewSignups selectedYear={props.selectedYear} />{" "}
        <GenderRatio selectedYear={props.selectedYear} />{" "}
      </div>{" "}
      <div className="grid-one-user">
        <NewMemberPeriodMetric selectedYear={props.selectedYear} />{" "}
        <GenderDistributionByChannel selectedYear={props.selectedYear} />{" "}
      </div>{" "}
      <div className="grid-two-user">
        <AnnualUserGrowth selectedYear={props.selectedYear} />{" "}
        <MemberScatterPlot selectedYear={props.selectedYear} />{" "}
        <TopFemaleMaleChannel selectedYear={props.selectedYear} />{" "}
      </div>{" "}
    </div>
  );
}

export default UserMetrics;

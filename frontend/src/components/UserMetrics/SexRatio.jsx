import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import GenderCount from '../data/gender_count.json'

function SexRatio() {
  const data = [GenderCount];

  const maleFemaleRatio = Math.round((data[0].M * 10) / data[0].F) / 10;

  return (
    <div className="summary_statistics card">
      {/* // <div className="summary_statistics__info"> */}
      <div className="ratio">
        <h1 style={{ color: "#323fff" }}>{maleFemaleRatio}</h1>
        <h3>:</h3>
        <h1 style={{ color: "#c1115a" }}>1</h1>
        <span>male to female ratio</span>
      </div>
      <ResponsiveContainer width="70%" height="100%">
        <BarChart
          layout="vertical"
          margin={{ left: 20, right: 0 }}
          data={data}
          barSize={40}
        >
          <YAxis type="category" hide />
          <XAxis type="number" hide />
          {/* <Tooltip /> */}
          <Bar dataKey="M" stackId="a" fill="#323fff"></Bar>
          <Bar dataKey="F" stackId="a" fill="#c1115a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SexRatio;

import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BsThreeDots } from "react-icons/bs";
import byChannelSexDistribution from "../data/by_channel_sex_distribution.json";



function GenderDistributionByChannel() {
  const data = byChannelSexDistribution.slice(0,30);

  return (
    <div className="post__activity card">
      <div className="post__activity__info">
        <div>
          <h3>Gender Distribution by Channel</h3>
          <span>Male users dominated all channels across the board</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis
            dataKey={"channel"}
            axisLine={false}
            tickLine={false}
            type={"category"}
            allowDataOverflow={true}
            tick={{ fontSize: "7px" }}
            angle={30}
            interval={0}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#2d333c", opacity: "0.9" }}
            cursor={{ fill: "none" }}
          />
          <Bar
            radius={[0, 0, 20, 20]}
            dataKey="male"
            stackId="a"
            fill="#323fff"
            barSize={10}
          />
          <Bar
            radius={[20, 20, 0, 0]}
            dataKey="female"
            stackId="a"
            fill="#c1115a"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GenderDistributionByChannel;

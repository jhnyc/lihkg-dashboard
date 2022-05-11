
import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import annualUser from "../data/annual_user_count.json";


function AnnualUserGrowth() {
  const data = annualUser;

  return (
    <div className="post__activity card">
      <div className="post__activity__info">
        <div>
          <h3>Annual User Growth</h3>
          <span>2019 saw the biggest jump in users</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <XAxis
            dataKey={"create_time"}
            axisLine={false}
            tickLine={false}
            type={"category"}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#2d333c", opacity: "0.9" }}
            cursor={{ fill: "none" }}
          />
          <Bar
            radius={[20, 20, 20, 20]}
            dataKey="user_id"
            stackId="a"
            fill={"#323fff"}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default AnnualUserGrowth;


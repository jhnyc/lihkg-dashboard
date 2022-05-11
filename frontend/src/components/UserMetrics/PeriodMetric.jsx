import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import numNewMembers from ".././data/number_of_new_members.json";

function PeriodMetric() {
  const [displayMode, setDisplayMode] = React.useState("daily");

  const all_data = numNewMembers[displayMode];

  const handleClick = (e) => {
    if (e.target.id == "setDaily") {
      setDisplayMode("daily");
    } else if (e.target.id == "setWeekly") {
      setDisplayMode("weekly");
    } else if (e.target.id == "setMonthly") {
      setDisplayMode("monthly");
    }
  };

  return (
    <div className="top__card card">
      <h3> Member Acquisition </h3> <span> 1 Jan - 31 Dec 2021 </span>
      <div className="top__card__controls">
        <button
          id="setDaily"
          onClick={handleClick}
          style={{
            border: `${displayMode == "daily" ? "2px solid white" : "0px"}`,
          }}
        >
          D
        </button>
        <button
          id="setWeekly"
          onClick={handleClick}
          style={{
            border: `${displayMode == "weekly" ? "2px solid white" : "0px"}`,
          }}
        >
          W
        </button>
        <button
          id="setMonthly"
          onClick={handleClick}
          style={{
            border: `${displayMode == "monthly" ? "2px solid white" : "0px"}`,
          }}
        >
          M
        </button>
      </div>
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart data={all_data}>
          <defs>
            <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#1cc97b" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#252931" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={{ backgroundColor: "#2d333c", opacity: "0.8" }}
            labelFormatter={(index) => {
              return `${all_data[index].date}`;
            }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#1eeb8e"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorview)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PeriodMetric;

import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Label,
} from "recharts";
import byChannelData from ".././data/by_channel_distribution.json";

function ChannelDistribution() {
  const [displayData, setDisplayData] = React.useState("");

  const data = byChannelData;

  const COLORS = [
    "#323fff",
    "#53ebe4",
    "#0f9595",
    "#084f64",
    "#03274c",
    "#08173d",
    "#0b001b",
    "#4d004f",
    "#c1115a",
    "#e46a87",
    "#8089a6",
    "#636a80",
  ];

  const totalPostCount = data.reduce(
    (totalSum, item) => totalSum + item.post_count,
    0
  );

  function calculatePercentage(value) {
    return Math.round(value / totalPostCount);
  }

  return (
    <div className="channel card">
      <div className="channel__info">
        <div>
          <h3>Post Distribution by Channel</h3>
          <span>Stop saying HK people have low social consciousness</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="post_count"
            onMouseOver={(e) =>
              setDisplayData(
                `${e.channel}  \n${Math.round(Number(e.percent * 100))}%`
              )
            }
            onMouseOut={(e) => setDisplayData("")}
            onClick={(e) => console.log(e.percent)}
          >
            <Label
              style={{ fill: "white" }}
              value={displayData}
              position="center"
            />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChannelDistribution;

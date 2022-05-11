import React from "react";
import scatterPlotData from "../data/user_scatter_plot_data.json";
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Cell,
  Tooltip,
  Scatter,
  Legend,
  Label,
  ResponsiveContainer
} from "recharts";
import "./MemberScatterPlot.css"

function MemberScatterPlot() {
  const plotData = scatterPlotData.slice(0, 500);
  const likeRatioThreshold = 90;
  const pagesThreshold = 30;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      console.log(payload);
      return (
          <div className="recharts-default-tooltip">
            <p className="recharts-tooltip-label">{payload[0].payload.name}</p>
            <span className="recharts-tooltip-item-list">
              Post: {payload[0].payload.post_count}
            </span>
            <br></br>
            <span className="recharts-tooltip-item-list">
              Like/Dislike Ratio:{" "}
              {Math.round(payload[0].payload.like_dislike_ratio * 10) / 10}
            </span>
          </div>
      );
    }
    return null;
  };

  return (
    <div className="tren card">
      <div>
        <h3>Distinguished Members</h3>
        <span>
          Top 100 members in terms like-dislike ratio, response & post count
        </span>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <ScatterChart margin={{ top: 40, right: 20, bottom: 10, left: 0 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="like_dislike_ratio"
            name="like_dislike_ratio"
            type="number"
            tick={true}
            tickSize={0}
          >
            <Label
              style={{
                fontSize: "100%",
                fill: "white",
              }}
              position="bottom"
              angle={0}
              value={"Like/Dislike Ratio"}
            />
          </XAxis>
          <YAxis dataKey="pages" name="pages" tick={true} tickSize={0}>
            <Label
              style={{
                textAnchor: "middle",
                fontSize: "100%",
                fill: "white",
              }}
              angle={270}
              position="insideleft"
              value={"Response"}
            />
          </YAxis>
          <ZAxis dataKey="post_count" range={[30, 700]} name="post count" />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            content={<CustomTooltip />}
          />
          <Legend iconSize={0} />
          <Scatter data={plotData}>
            {plotData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.like_dislike_ratio > likeRatioThreshold ||
                  entry.pages > pagesThreshold
                    ? "#c1115a"
                    : "#4758a680"
                }
                onClick={() =>
                  window.open(
                    `https://lihkg.com${entry.created_by_id}`,
                    "_blank"
                  )
                }
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MemberScatterPlot
;

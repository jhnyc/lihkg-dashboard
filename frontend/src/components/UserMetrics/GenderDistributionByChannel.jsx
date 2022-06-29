import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function GenderDistributionByChannel() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const BARTOSHOW = 30; // number of bar to show in the bar chart

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `/by_channel_sex_distribution`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="post__activity card">
      <div className="post__activity__info">
        <div>
          <h3>Gender Distribution by Channel</h3>
          <span>Male users dominated all channels across the board</span>
        </div>
      </div>

      {loading ? (
        "Loading..."
      ) : (
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data.slice(0, BARTOSHOW)}>
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
      )}
    </div>
  );
}

export default GenderDistributionByChannel;

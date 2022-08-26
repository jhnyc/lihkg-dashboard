import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

function TrendingUsers() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/post_count_by_user_age`);
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
    <div className="contributor card">
      <div className="info">
        <div>
          <h3>Major Contributors</h3>
          <span>New members barely post anything.</span>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} margin={{ top: 30, bottom: 30 }}>
            <XAxis
              dataKey={"age"}
              axisLine={false}
              tickLine={false}
              type={"category"}
              dy={1}
              
            >
              <Label
                style={{
                  fontSize: "85%",
                  fill: "#cccccc",
                }}
                offset={10}
                position="bottom"
                value={"Years since Sign-up"}
              />
            </XAxis>
            <Tooltip
              contentStyle={{ backgroundColor: "#2d333c", opacity: "0.9" }}
              cursor={{ fill: "none" }}
            />
            <Bar
              radius={[20, 20, 20, 20]}
              dataKey="post_count"
              stackId="a"
              fill={"#323fff"}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default TrendingUsers;

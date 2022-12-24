import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function PostActivity(props) {
  const [displayMode, setDisplayMode] = React.useState("by_weekday");
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3100/posts_by_weekday_hour?year=${props.selectedYear}`
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
  }, [props.selectedYear]);

  const handleClick = () => {
    if (displayMode == "by_weekday") {
      setDisplayMode("by_hour");
    } else {
      setDisplayMode("by_weekday");
    }
  };

  return (
    <div className="post__activity card">
      <h3>Post Activity</h3>
      <span>Users are most active at 11pm during weekdays.</span>
      <div className="top__card__controls">
        <button
          id="weekday_hour"
          onClick={handleClick}
          style={{
            backgroundColor: `${
              displayMode == "by_weekday" ? "#852c51" : "#2d3965"
            }`,
          }}
        >
          {displayMode == "by_weekday" ? "W" : "H"}
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data[displayMode]}>
            <XAxis
              dataKey={displayMode == "by_weekday" ? "weekday" : "hour"}
              axisLine={false}
              tickLine={false}
              type={displayMode == "by_weekday" ? "category" : "number"}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#2d333c", opacity: "0.9" }}
              cursor={{ fill: "none" }}
            />
            <Bar
              radius={[20, 20, 20, 20]}
              dataKey="post_count"
              stackId="a"
              fill={displayMode == "by_weekday" ? "#c1115a" : "#323fff"}
              barSize={displayMode == "by_weekday" ? 20 : 7}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default PostActivity;

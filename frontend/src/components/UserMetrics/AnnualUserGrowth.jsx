
import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";


function AnnualUserGrowth() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api//annual_user_count`);
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
          <h3>Annual User Growth</h3>
          <span>2019 saw the biggest jump in users</span>
        </div>
      </div>
      {loading ? "Loading..." :
      (<ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} margin={{ top: 30, bottom: 20 }}>
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
      </ResponsiveContainer>)}
    </div>
  );
}
export default AnnualUserGrowth;


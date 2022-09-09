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

function ChannelDistribution() {
  const [displayData, setDisplayData] = React.useState("");
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/by_channel_distribution`);
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

  const COLORS = [
    "#b12a5a",
    "#a62b67",
    "#9c2d74",
    "#922f80",
    "#87318d",
    "#7d329a",
    "#7334a7",
    "#6936b4",
    "#5e37c1",
    "#5439ce",
    "#4a3bda",
    "#3f3de7",
  ];

  const totalPostCount = loading
    ? 1
    : data.reduce((totalSum, item) => totalSum + item.post_count, 0);

  return loading ? (
    "Loading..."
  ) : (
    <div className="channel card">
      <div className="channel__info">
        <div>
          <h3>Posts by Channel</h3>
          <span>A great chunk of posts are about social affairs.</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            innerRadius={90}
            outerRadius={130}
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

import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

function PeriodMetric() {
  const [displayMode, setDisplayMode] = React.useState("daily");
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `/number_of_new_members`
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
      {loading ? (
        "Loading..."
      ) : (
        <ResponsiveContainer width="100%" height="75%">
          <AreaChart data={data[displayMode]}>
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#1cc97b" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#252931" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{ backgroundColor: "#2d333c", opacity: "0.8" }}
              labelFormatter={(index) => {
                return `${data[displayMode][index]["date"]}`;
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
      )}
    </div>
  );
}

export default PeriodMetric;

import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

function SexRatio() {
  // const data = [GenderCount];
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [maleFemaleRatio, setMaleFemaleRatio] = React.useState(1);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api//gender_count`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setMaleFemaleRatio(Math.round((actualData.M * 10) / actualData.F) / 10);
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
    <div className="summary_statistics card">
      {/* // <div className="summary_statistics__info"> */}
      <div className="ratio">
        <h1 style={{ color: "#323fff" }}>{loading ? "1" : maleFemaleRatio}</h1>
        <h3>:</h3>
        <h1 style={{ color: "#c1115a" }}>1</h1>
        <span>male to female ratio</span>
      </div>
      <ResponsiveContainer width="70%" height="100%">
        <BarChart
          layout="vertical"
          margin={{ left: 20, right: 0 }}
          data={[data]}
          barSize={40}
        >
          <YAxis type="category" hide />
          <XAxis type="number" hide />
          {/* <Tooltip /> */}
          <Bar dataKey="M" stackId="a" fill="#323fff"></Bar>
          <Bar dataKey="F" stackId="a" fill="#c1115a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SexRatio;

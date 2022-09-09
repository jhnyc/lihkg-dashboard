import React from "react";
import "./TopFemaleMaleChannel.css";

function TopFemaleMaleChannel() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api//gender_balance`);
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
    <div className="top_female_male card">
      <div className="top_female_male__info">
        <div>
          <h3>Most Feminine & Masculine Channel</h3>
          <span>Even the most feminine channel is barely 50/50</span>
        </div>
        <div className="top_female_male_container">
          <div className="feminine">
            <h1>{loading ? "Loading..." : data['most feminine'].ratio}</h1>
            <span>female publishers per 100 posts</span>
            <div id="channel">{loading ? "Loading..." : data['most feminine'].channel}</div>
          </div>
          <div className="masculine">
            <h1>{loading ? "Loading..." : data['most masculine'].ratio}</h1>
            <span>male publishers per 100 posts</span>
            <div id="channel">{loading ? "Loading..." : data['most masculine'].channel}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFemaleMaleChannel;

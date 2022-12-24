import React from "react";

function TotalUniquePublishers(props) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3100/post_statistics?year=${props.selectedYear}`
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

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{loading ? "..." : data.users_with_post} </h1>
        <span>users have published</span>
      </div>
    </div>
  );
}

export default TotalUniquePublishers;

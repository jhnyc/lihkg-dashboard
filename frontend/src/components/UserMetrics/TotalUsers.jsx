import React from "react";

function TotalUsers(props) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3100/annual_user_count?year=${props.selectedYear}`
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

  const totalUsers = data?.reduce((total, item) => total + item.user_id, 0);

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{loading ? "Loading..." : totalUsers} </h1>
        <span>total members as of 31/12/{props.selectedYear}</span>
      </div>
    </div>
  );
}

export default TotalUsers;

import React from "react";

function TotalNewUsers() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/annual_user_count`);
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
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>
          {loading
            ? "Loading..."
            : data.filter((year) => {
                return year.create_time === 2021;
              })[0].user_id}{" "}
        </h1>
        <span>new sign-ups in 2021</span>
      </div>
    </div>
  );
}

export default TotalNewUsers;

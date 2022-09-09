import React from "react";

function TotalLikeDislike() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/post_statistics`);
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

  const roundNumberMillion = (num) => {
    return Math.round((num * 10) / 1000000) / 10;
  };

  return (
    <>
      <div className="summary_statistics card">
        <div className="summary_statistics__info">
          <h1>{loading ? "Loading" : `${roundNumberMillion(data.like)}m`} </h1>
          <span>likes</span>
        </div>
      </div>
      <div className="summary_statistics card">
        <div className="summary_statistics__info">
          <h1>
            {loading ? "Loading" : `${roundNumberMillion(data.dislike)}m`}{" "}
          </h1>
          <span>dislikes</span>
        </div>
      </div>
    </>
  );
}

export default TotalLikeDislike;

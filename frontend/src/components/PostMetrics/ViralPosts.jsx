import React from "react";
import "./ViralPosts.css";

function TopPosts() {
  const [displayByLike, setDisplayByLike] = React.useState(true);
  // const data = displayByLike ? topPosts.by_like : topPosts.by_dislike
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/top_posts`);
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

  const toggleHandler = () => {
    setDisplayByLike(!displayByLike);
  };

  const generateData = () => {
    return data[displayByLike ? "by_like" : "by_dislike"].map((item, index) => (
      <div className="trend">
        <div className="trend__info">
          <div>
            <a
              href={`https://lihkg.com/thread/${item.thread_id}/page/1`}
              target="_blank"
            >
              <h5>{item.title}</h5>
            </a>
            <span>{item.created_by_name}</span>
          </div>
        </div>
        <div className="trend__meta">
          <span id="channel_icon">{item.channel}</span>
          <h5>{displayByLike ? item.like : item.dislike}</h5>
        </div>
      </div>
    ));
  };

  return (
    <div className="top_posts card">
      <div className="info">
        <div>
          <h3>Viral Posts</h3>
          <span>What are the most liked & disliked posts?</span>
        </div>
        <button
          className="like_dislike"
          onClick={toggleHandler}
          style={{
            backgroundColor: `${displayByLike ? "#2d3965" : "#852d51"}`,
          }}
        >
          {displayByLike ? "L" : "D"}
        </button>
      </div>
      {loading ? "Loading..." : generateData()}
    </div>
  );
}

export default TopPosts;

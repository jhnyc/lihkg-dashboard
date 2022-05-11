import React from "react";
import topPosts from ".././data/top_posts.json"

function TopPosts() {
    const [topLiked, setTopLiked] = React.useState(true)
    const data = topLiked ? topPosts.by_like : topPosts.by_dislike

    const toggleHandler = () => {
        setTopLiked(!topLiked)
    }

    const generateData = () => {
        return data.map((item, index) => (
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
              <h5>{topLiked ? item.like : item.dislike}</h5>
            </div>
          </div>
        ));
    }

    return (
      <div className="trending__tracks card">
        <div className="trending__info">
          {console.log(data)}
          <div>
            <h3>Viral Posts</h3>
            <span>What are the most liked & disliked posts?</span>
          </div>
          <button
            className="like_dislike"
            onClick={toggleHandler}
            style={{
              backgroundColor: `${topLiked ? "#2d3965" : "#852d51"}`,
            }}
          >
            {topLiked ? "L" : "D"}
          </button>
        </div>
        {generateData()}
      </div>
    );
}

export default TopPosts;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Profanities.css";

function ProfanityMetrics() {
  const [locked, setLocked] = React.useState(true);
  const [displayUncensored, setDisplayUncensored] = React.useState(false);
  const [guessMode, setGuessMode] = React.useState(true);

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/profanity_statistics`);
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

  const profanityRate = loading
    ? ""
    : Math.round((data.post_with_profanity * 100) / data.total_post);

  function calculateFontSize(value) {
    if (value < 10000) {
      return "2vw";
    } else if (value < 20000) {
      return "3vw";
    } else if (value < 30000) {
      return "4vw";
    } else if (value < 40000) {
      return "5vw";
    } else if (value < 100000) {
      return "6vw";
    }
  }

  const handleClickAboveEighteen = () => {
    setLocked(!locked);
    setDisplayUncensored(true);
  };
  const handleClickBelowEighteen = () => {
    setLocked(!locked);
    setDisplayUncensored(false);
  };

  const handleClickGuess = () => {
    setGuessMode(false);
  };

  return loading ? (
    "Loading..."
  ) : (
    <div className="post__activity card">
      <div className="post__activity__info">
        <div>
          <h3>Profanities</h3>
          <span>Did we curse a lot? How much?</span>
        </div>
      </div>
      <div id="unlock_container" style={{ display: locked ? "flex" : "none" }}>
        <button id="unlock_button" onClick={handleClickAboveEighteen}>
          I'm 18+
        </button>
        <button id="unlock_button" onClick={handleClickBelowEighteen}>
          Not 18+ but want to see it
        </button>
      </div>
      <div
        id="profanity_info"
        // style={{ visibility: locked ? "hidden" : "visible" }}
        style={{ display: locked ? "none" : "flex" }}
      >
        <div
          id="gradient_bar"
          style={{
            background: "rgb(193,17,90)",
            background: `linear-gradient(90deg, rgba(193,17,90,1) 0%, rgba(50,63,255,1) ${
              profanityRate * 2
            }%, rgba(24,24,24,1) 100%)`,
          }}
        >
          {profanityRate}% of all posts contain at least 1 profanity word.
        </div>

        <div id="word_blob">
          {data.word_frequency.map((item, index) => (
            <>
              <div
                id={`top_profanity_word_${index}${guessMode ? "" : "_active"}`}
                style={{
                  fontSize: guessMode
                    ? "4vw"
                    : calculateFontSize(item.frequency),
                }}
                onClick={handleClickGuess}
              >
                {displayUncensored ? item.word : item.word_censored}
              </div>
              <span style={{ visibility: guessMode ? "hidden" : "visible" }}>
                {Math.round(item.frequency / 100) / 10}k times
              </span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfanityMetrics;

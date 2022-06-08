import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import topWordsRelatedPosts from ".././data/top_words_related_posts.json";

function Keywords() {
   const [data, setData] = React.useState([]);
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(null);
   const NUMBEROFPOST = 8;
   const [selectedKeyword, setSelectedKeyword] = React.useState(null);
 
   React.useEffect(() => {
     const getData = async () => {
       try {
         const response = await fetch(
           `http://localhost:3100/top_words_related_posts`
         );
         if (!response.ok) {
           throw new Error(
             `This is an HTTP error: The status is ${response.status}`
           );
         }
         let actualData = await response.json();
         setData(actualData);
         setSelectedKeyword(actualData.at(0).Phrase);
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
   

  const barChartOnClickSearchPost = (e) => {
    var phrase = e.Phrase.replace(" ", "");
    window.open(`https://lihkg.com/search?q=${phrase}`, "_blank");
  };

  const barChartOnClickDisplayRelatedPost = (e) => {
    setSelectedKeyword(e.Phrase);
  }

  const getBarColors = () => { 
    let barColors = Array(10).fill("#323fff")
    barColors[findKeywordIndexInArray()] = "#c1115a";
    return barColors;
  }

  const barColors = getBarColors();

  const barChart = () => {
    return (
      <ResponsiveContainer width="50%" height="90%">
        <BarChart data={data} layout="vertical" margin={{ top: 15, left: 5 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            width={40}
            dataKey="Phrase"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#fafafa" }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#2d333c", opacity: "0.9" }}
            cursor={{ fill: "none" }}
          />
          <Bar
            radius={[0, 10, 10, 0]}
            dataKey="Frequency"
            stackId="a"
            fill="#323fff"
            barSize={10}
            background={{ fill: "#595c5a" }}
            onClick={barChartOnClickDisplayRelatedPost}
          >
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };


  function findKeywordIndexInArray() {
    let keywordIndexInArray;
    for (var i = 0; i < data.length; i++) {
      if (data[i].Phrase === selectedKeyword) {
        keywordIndexInArray = i;
        break;
      }
    }
    return keywordIndexInArray
  }

  const generateRelatedPost = () => {
    let keywordIndexInArray = findKeywordIndexInArray();
    var relatedPost = data.at(keywordIndexInArray).Related_post;
    return relatedPost.slice(0,NUMBEROFPOST).map((post, index) => (
      <div className="keywords_related_post_info">
        <h5>{post.title}</h5>
        <span>{post.created_by_name}</span>
      </div>
    ));
  };

  const relatedPost = () => {
    return <div className="keywords_related_post">{generateRelatedPost()}</div>;
  };

  return (
    <div className="keywords card">
      <div className="keywords__info">
        <h3>Popular Words</h3>
        <span>What did we frequently talk about?</span>
      </div>
      {loading ? "Loading..." : barChart()}
      {loading ? "Loading..." : relatedPost()}
    </div>
  );
}

export default Keywords;

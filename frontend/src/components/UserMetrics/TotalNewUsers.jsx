import React from "react";

function TotalNewUsers() {
   const [data, setData] = React.useState(null);
   const [loading, setLoading] = React.useState(true);
   const [error, setError] = React.useState(null);
 
   React.useEffect(() => {
     const getData = async () => {
       try {
         const response = await fetch(
           `http://localhost:3100/new_signup_2021`
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
   }, []);

  return (
    <div className="summary_statistics card">
      <div className="summary_statistics__info">
        <h1>{loading ? "Loading..." : data["2021"]} </h1>
        <span>new sign-ups in 2021</span>
      </div>
    </div>
  );
}

export default TotalNewUsers;

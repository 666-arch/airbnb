import apiRequest from "@/services";
import React, { memo, useEffect } from "react";

const Home = memo(() => {
  useEffect(() => {
    apiRequest
      .get({
        url: "/home/highscore",
      })
      .then((res) => {
        console.log(res);
      });
  }, []);
  return <div>
    <h1>Home Page</h1>
  </div>;
});
export default Home;

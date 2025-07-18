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
  return <div>Home</div>;
});
export default Home;

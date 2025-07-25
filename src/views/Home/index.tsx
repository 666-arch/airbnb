// import apiRequest from "@/services";
import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cnps/home-banner";

const Home = memo(() => {
  // useEffect(() => {
  //   apiRequest
  //     .get({
  //       url: "/home/highscore",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner/>
      <div className="w-1032px">
        aaaaa
      </div>
    </div>
  );
});
export default Home;

// import apiRequest from "@/services";
import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cnps/home-banner";
import { useDispatch } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { Action } from "@reduxjs/toolkit";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
  }, [dispatch]);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px">aaaaa</div>
    </div>
  );
});
export default Home;

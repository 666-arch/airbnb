// import apiRequest from "@/services";
import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cnps/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { Action } from "@reduxjs/toolkit";

const Home = memo(() => {

  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodProiceInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
  }, [dispatch]);

  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px">
        <h2>{goodPriceInfo?.title}</h2>
      </div>
    </div>
  );
});
export default Home;

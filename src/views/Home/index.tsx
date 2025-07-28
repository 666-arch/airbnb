import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cnps/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { Action } from "@reduxjs/toolkit";
import SectionHeader from '@/components/section-header/index';

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state: { home: { goodPriceInfo: IGoodPriceInfoList } }) => ({
      goodPriceInfo: state.home.goodPriceInfo,
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
        <SectionHeader title={goodPriceInfo.title}/>

      </div>
    </div>
  );
});
export default Home;

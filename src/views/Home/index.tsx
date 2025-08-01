import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cnps/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { Action } from "@reduxjs/toolkit";
import SectionHeader from "@/components/section-header/index";
import SectionRooms from "@/components/section-rooms";
const Home = memo(() => {
  const { goodPriceInfo, goodHighScoreInfo } = useSelector(
    (state: {
      home: {
        goodPriceInfo: IGoodPriceInfoList;
        goodHighScoreInfo: IGoodHighScoreList;
      };
    }) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      goodHighScoreInfo: state.home.goodHighScoreInfo,
    }),
    shallowEqual
  );
  const _goodPriceInfo: IGoodPriceInfoList = goodPriceInfo;
  const _goodHighScoreInfo: IGoodHighScoreList = goodHighScoreInfo;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
  }, [dispatch]);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px flex flex-col">
        <div className="good-price-info flex flex-col">
          <SectionHeader
            title={_goodPriceInfo?.title}
            subtitle={_goodPriceInfo?.subtitle}
          />
          <SectionRooms roomList={_goodPriceInfo} />
        </div>

        <div className="good-highScore-info">
          <SectionHeader
            title={_goodHighScoreInfo?.title}
            subtitle={_goodHighScoreInfo?.subtitle}
          />

          <SectionRooms roomList={_goodHighScoreInfo} />
        </div>
      </div>
    </div>
  );
});
export default Home;

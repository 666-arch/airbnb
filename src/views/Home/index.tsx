import { memo, useEffect } from "react";
import { Action } from "@reduxjs/toolkit";
import HomeBanner from "./c-cnps/home-banner";
import HomePrice from "./c-cnps/home-price";
import HomeDiscount from "./c-cnps/home-discount";
import HomeHighScore from "./c-cnps/home-highScore";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeHotRecommend from "./c-cnps/home-recommend";
import { isEmptyOf } from "@/utils";
const Home = memo(() => {
  const {
    goodPriceInfo,
    goodHighScoreInfo,
    goodDiscountInfo,
    goodHotRecommendInfo,
  } = useSelector(
    (state: {
      home: {
        goodPriceInfo: IHomeRoomInfoList;
        goodHighScoreInfo: IHomeRoomInfoList;
        goodDiscountInfo: IHomeDiscountInfoList;
        goodHotRecommendInfo: IHomeDiscountInfoList;
      };
    }) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      goodHighScoreInfo: state.home.goodHighScoreInfo,
      goodDiscountInfo: state.home.goodDiscountInfo,
      goodHotRecommendInfo: state.home.goodHotRecommendInfo,
    }),
    shallowEqual
  );
  const _goodPriceInfo: IHomeRoomInfoList = goodPriceInfo;
  const _goodHighScoreInfo: IHomeRoomInfoList = goodHighScoreInfo;
  const _goodDiscountInfo: IHomeDiscountInfoList = goodDiscountInfo;
  const _goodHotRecommendInfo: IHomeDiscountInfoList = goodHotRecommendInfo;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
  }, [dispatch]);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px flex flex-col">
        {isEmptyOf(_goodDiscountInfo.dest_list) && (
          <HomeDiscount _goodDiscountInfo={_goodDiscountInfo} />
        )}
        {isEmptyOf(_goodHotRecommendInfo.dest_list) && (
          <HomeHotRecommend _goodHotRecommendInfo={_goodHotRecommendInfo} />
        )}
        <HomePrice _goodPriceInfo={_goodPriceInfo} />
        <HomeHighScore _goodHighScoreInfo={_goodHighScoreInfo} />
      </div>
    </div>
  );
});
export default Home;

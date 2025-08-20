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
import HomeLongFor from "./c-cnps/home-longfor";
import HomePlus from "./c-cnps/home-plus";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";
const Home = memo(() => {
  const {
    goodPriceInfo,
    goodHighScoreInfo,
    goodDiscountInfo,
    goodHotRecommendInfo,
    goodLongForInfo,
    goodPlusInfo,
  } = useSelector(
    (state: {
      home: {
        goodPriceInfo: IHomeRoomInfoList;
        goodHighScoreInfo: IHomeRoomInfoList;
        goodDiscountInfo: IHomeDiscountInfoList;
        goodHotRecommendInfo: IHomeDiscountInfoList;
        goodLongForInfo: IHomeRoomInfoList;
        goodPlusInfo: IHomeRoomInfoList;
      };
    }) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      goodHighScoreInfo: state.home.goodHighScoreInfo,
      goodDiscountInfo: state.home.goodDiscountInfo,
      goodHotRecommendInfo: state.home.goodHotRecommendInfo,
      goodLongForInfo: state.home.goodLongForInfo,
      goodPlusInfo: state.home.goodPlusInfo,
    }),
    shallowEqual
  );
  const _goodPriceInfo: IHomeRoomInfoList = goodPriceInfo;
  const _goodHighScoreInfo: IHomeRoomInfoList = goodHighScoreInfo;
  const _goodDiscountInfo: IHomeDiscountInfoList = goodDiscountInfo;
  const _goodHotRecommendInfo: IHomeDiscountInfoList = goodHotRecommendInfo;
  const _goodLongForInfo: IHomeRoomInfoList = goodLongForInfo;
  const _goodPlusInfo: IHomeRoomInfoList = goodPlusInfo;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
    dispatch(changeHeaderConfigAction({isFixed: true}) as unknown as Action)
  }, [dispatch]);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      {/* <AppHeader/> */}
      <HomeBanner />
      <div className="w-1032px flex flex-col">
        {isEmptyOf(_goodDiscountInfo.dest_list) && (
          <HomeDiscount _goodDiscountInfo={_goodDiscountInfo} />
        )}

        {isEmptyOf(_goodHotRecommendInfo.dest_list) && (
          <HomeHotRecommend _goodHotRecommendInfo={_goodHotRecommendInfo} />
        )}

        {isEmptyOf(_goodPriceInfo) && (
          <HomePrice _goodPriceInfo={_goodPriceInfo} />
        )}

        {isEmptyOf(_goodLongForInfo) && (
          <HomeLongFor _goodLongFor={goodLongForInfo} />
        )}

        {isEmptyOf(_goodHighScoreInfo) && (
          <HomeHighScore _goodHighScoreInfo={_goodHighScoreInfo} />
        )}

        {isEmptyOf(goodPlusInfo) && <HomePlus _goodPlusInfo={goodPlusInfo} />}
      </div>
    </div>
  );
});
export default Home;

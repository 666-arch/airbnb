import { memo, useEffect } from "react";
import { Action } from "@reduxjs/toolkit";
import HomeBanner from "./c-cnps/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeDiscount from "./c-cnps/home-discount";
import HomePrice from "./c-cnps/home-price";
import HomeHighScore from "./c-cnps/home-highScore";
const Home = memo(() => {
  const { goodPriceInfo, goodHighScoreInfo, goodDiscountInfo } = useSelector(
    (state: {
      home: {
        goodPriceInfo: IHomeRoomInfoList;
        goodHighScoreInfo: IHomeRoomInfoList;
        goodDiscountInfo: IHomeDiscountInfoList;
      };
    }) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      goodHighScoreInfo: state.home.goodHighScoreInfo,
      goodDiscountInfo: state.home.goodDiscountInfo,
    }),
    shallowEqual
  );
  const _goodPriceInfo: IHomeRoomInfoList = goodPriceInfo;
  const _goodHighScoreInfo: IHomeRoomInfoList = goodHighScoreInfo;
  const _goodDiscountInfo: IHomeDiscountInfoList = goodDiscountInfo;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
  }, [dispatch]);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px flex flex-col">
        <HomeDiscount _goodDiscountInfo={_goodDiscountInfo} />
        <HomePrice _goodPriceInfo={_goodPriceInfo} />
        <HomeHighScore _goodHighScoreInfo={_goodHighScoreInfo} />
      </div>
    </div>
  );
});
export default Home;

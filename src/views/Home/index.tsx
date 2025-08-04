import { memo, useEffect } from "react";
import { Action } from "@reduxjs/toolkit";
import HomeBanner from "./c-cnps/home-banner";
import SectionRooms from "@/components/section-rooms";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header/index";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
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

  console.log(_goodDiscountInfo.dest_list?.["佛山"]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
  }, [dispatch]);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px flex flex-col">
        <div className="good-discount-info flex flex-col">
          <SectionHeader
            title={_goodDiscountInfo.title}
            subtitle={_goodDiscountInfo.subtitle}
          />
          <SectionRooms
            roomList={_goodDiscountInfo?.dest_list?.["佛山"]}
            width={"33%"}
          />
        </div>

        <div className="good-price-info flex flex-col">
          <SectionHeader
            title={_goodPriceInfo?.title}
            subtitle={_goodPriceInfo?.subtitle}
          />
          <SectionRooms roomList={_goodPriceInfo.list} />
        </div>

        <div className="good-highScore-info">
          <SectionHeader
            title={_goodHighScoreInfo?.title}
            subtitle={_goodHighScoreInfo?.subtitle}
          />
          <SectionRooms roomList={_goodHighScoreInfo.list} />
        </div>
        
      </div>
    </div>
  );
});
export default Home;

import { memo, useCallback, useEffect, useState } from "react";
import { Action } from "@reduxjs/toolkit";
import HomeBanner from "./c-cnps/home-banner";
import SectionRooms from "@/components/section-rooms";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header/index";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionTabs from "@/components/section-tabs";
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

  const _tabNames = _goodDiscountInfo.dest_address?.map((item) => item?.name)
  const [tabName, setTabName] = useState<string>('佛山')
  const handleTabClick = 
  useCallback((index: number, name: string) => {
    console.log(index, name);
    setTabName(name)
  }, []);

  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px flex flex-col">
        <div className="good-discount-info flex flex-col">
          <SectionHeader
            title={_goodDiscountInfo.title}
            subtitle={_goodDiscountInfo.subtitle}
          />
          <SectionTabs
            tabNames={_tabNames}
            tabClick={handleTabClick}
          />
          <SectionRooms
            roomList={_goodDiscountInfo?.dest_list?.[tabName]}
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

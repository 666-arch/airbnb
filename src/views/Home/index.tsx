import React, { memo, useEffect } from "react";
import HomeBanner from "./c-cnps/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { Action } from "@reduxjs/toolkit";
import SectionHeader from "@/components/section-header/index";
import RoomItem from "@/components/room-item";
const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state: { home: { goodPriceInfo: IGoodPriceInfoList } }) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  const _data: IGoodPriceInfoList = goodPriceInfo;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction() as unknown as Action);
  }, [dispatch]);
  return (
    <div className="home-page-wrapper flex flex-col flex-items-center">
      <HomeBanner />
      <div className="w-1032px">
        <SectionHeader title={_data?.title} />
        <div className="flex flex-wrap mr--8px ml--8px">
          {_data.list?.slice(0, 8).map((item) => (
            <RoomItem
              key={item.name}
              name={item.name}
              picture_url={item.picture_url}
              verify_info={item.verify_info}
              price_format={item.price_format}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
});
export default Home;

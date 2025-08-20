import RoomItem from "@/components/room-item";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Rate, Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { changeDetailInfoAction } from "@/store/modules/detail";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const EntireRooms = memo(({}) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state: {
      entire: {
        roomList: RoomListType[];
        totalCount: number;
        isLoading: boolean;
      };
    }) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback((item: RoomListType) => {
    // console.log('itemclick',item);
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  },[navigate, dispatch])
  return (
    <div className="entire-rooms-info flex flex-col mt-128px">
      <div className="px-28px font-700 mt-10px">共{totalCount}多处住所</div>
      {roomList.length > 0 && (
        <div className="flex flex-wrap px-20px py-20px font-size-22px">
          {roomList.map((item) => (
            <RoomItem
              key={item.id}
              // name={item.name}
              // verify_info={item.verify_info}
              // price_format={item.price_format}
              // star_rating={item.reviews_count}
              // picture_url={item.picture_url}
              // picture_urls={item.picture_urls}
              itemData={item}
              width="20%"
              itemClick={handleItemClick}
            />
          ))}
        </div>
      )}

      {isLoading && <div className="room-cover"></div>}
    </div>
  );
});

export default EntireRooms;

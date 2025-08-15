import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const EntireRooms = memo(({}) => {
  const { roomList, totalCount } = useSelector(
    (state: { entire: { roomList: RoomListType[], totalCount: number } }) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount
    })
  );
  return (
    <div className="entire-rooms-info flex flex-col flex-wrap">
      <div className="px-28px font-700 mt-10px">共{totalCount}多处住所</div>
      {roomList.length > 0 && (
        <div className="flex flex-wrap px-20px py-20px font-size-22px">
          {roomList.map((item) => (
            <RoomItem
              key={item.id}
              name={item.name}
              verify_info={item.verify_info}
              price_format={item.price_format}
              star_rating={item.reviews_count}
              picture_url={item.picture_url}
              width="20%"
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default EntireRooms;

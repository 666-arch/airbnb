import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const EntireRooms = memo(({}) => {
  const { roomList } = useSelector(
    (state: { entire: { roomList: RoomListType[] } }) => ({
      roomList: state.entire.roomList,
    })
  );
  return (
    <div className="entire-rooms-info flex flex-wrap">
      {roomList.length > 0 &&
        roomList.map((item) => (
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
  );
});

export default EntireRooms;

import React, { memo } from "react";
import RoomItem from "../room-item";
interface IProps {
  roomList: Array<RoomListType>;
  width?: React.CSSProperties["width"];
}
const SectionRooms: React.FC<IProps> = memo(({ width, roomList }) => {
  return (
    <div className="flex flex-wrap mr--8px ml--8px">
      {roomList?.slice(0, 8).map((item) => (
        <RoomItem
          key={item.id}
          itemData={item}
          // name={item.name}
          // picture_url={item.picture_url}
          // verify_info={item.verify_info}
          // price_format={item.price_format}
          // star_rating={item.star_rating}
          width={width}
        />
      ))}
    </div>
  );
});

export default SectionRooms;

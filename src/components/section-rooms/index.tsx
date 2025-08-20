import React, { memo, useCallback } from "react";
import RoomItem from "../room-item";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeDetailInfoAction } from "@/store/modules/detail";
interface IProps {
  roomList: Array<RoomListType>;
  width?: React.CSSProperties["width"];
}
const SectionRooms: React.FC<IProps> = memo(({ width, roomList }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback((item: RoomListType) => {
    // console.log('itemclick',item);
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  },[navigate, dispatch])
  return (
    <div className="flex flex-wrap mr--8px ml--8px">
      {roomList?.slice(0, 8).map((item, index) => (
        <RoomItem
          key={index}
          itemData={item}
          // name={item.name}
          // picture_url={item.picture_url}
          // verify_info={item.verify_info}
          // price_format={item.price_format}
          // star_rating={item.star_rating}
          width={width}
          itemClick={handleItemClick}
        />
      ))}
    </div>
  );
});

export default SectionRooms;

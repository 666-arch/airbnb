import React, { memo } from "react";
interface IProps extends RoomListType {
  width?: React.CSSProperties["width"];
}
const LongForItem: React.FC<IProps> = memo(({ picture_url, city, price }) => {
  return (
    <div className="longfor-item-info pos-relative">
      <img src={picture_url} className="w-200px" />
      <div
        className="w-200px h-246px pos-absolute top-0px"
        style={{ backgroundColor: "#000", zIndex: 1, opacity: 0.2 }} 
      ></div>
      <div className="w-200px pos-absolute bottom-25px flex flex-col items-center gap-5px z-2">
        <div>{city}</div>
        <div>均价 {price}</div>
      </div>
    </div>
  );
});

export default LongForItem;

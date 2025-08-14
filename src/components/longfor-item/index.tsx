import React, { memo } from "react";
interface IProps {
  itemData: RoomListType;
}
const LongForItem: React.FC<IProps> = memo(({ itemData }) => {
  return (
    <div className="longfor-item-info pos-relative">
      <img src={itemData.picture_url} className="w-200px" />
      <div className="cover"></div>
      <div className="w-200px pos-absolute bottom-25px flex flex-col items-center gap-5px">
        <div>{itemData.city}</div>
        <div>均价 {itemData.price}</div>
      </div>
    </div>
  );
});

export default LongForItem;

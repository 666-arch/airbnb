import React, { memo } from "react";
import { Rate, Carousel } from "antd";
interface IProps {
  width?: React.CSSProperties["width"];
  itemClick?: (data: RoomListType) => void;
  itemData: RoomListType;
}
const RoomItem: React.FC<IProps> = memo(
  ({
    width,
    itemData,
    itemClick
  }) => {
    return (
      <div className="p-8px cursor-pointer" style={{ width: width ?? "25%" }} onClick={()=>itemClick(itemData)}>
        <Carousel>
          {!!itemData?.picture_urls?.length ? (
            itemData?.picture_urls?.map((item) => (
              <div className="pos-relative overflow-hidden pt-66% pr-8px pl-8px pb-0">
                <img
                  src={item}
                  className="pos-absolute left-0px top-0px w-100% h-100% b-rd-3px"
                />
              </div>
            ))
          ) : (
            <div className="pos-relative overflow-hidden pt-66% pr-8px pl-8px pb-0">
              <img
                src={itemData.picture_url}
                className="pos-absolute left-0px top-0px w-100% h-100% b-rd-3px"
              />
            </div>
          )}
        </Carousel>
        <div
          className="font-size-12px font-700 mt-10px mb-5px"
          style={{ color: itemData.verify_info?.text_color }}
        >
          {itemData.verify_info?.messages.join("·")}
        </div>
        <div className="font-size-16px font-700 overflow-hidden text-ellipsis line-clamp-2">
          {itemData.name}
        </div>
        <div className="font-size-12px font-600 mt-8px mb-8px">
          {itemData.price_format}/晚
        </div>
        <Rate allowHalf defaultValue={itemData.star_rating ?? 0} />
      </div>
    );
  }
);

export default RoomItem;

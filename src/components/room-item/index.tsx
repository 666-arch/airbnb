import React, { memo } from "react";
import { Rate } from "antd";
interface IProps extends GoodPriceChildInfo {
  width?: React.CSSProperties["width"];
}
const RoomItem: React.FC<IProps> = memo(
  ({ width, name, picture_url, verify_info, price_format, star_rating }) => {
    return (
      <div className="p-8px" style={{ width: width ?? "25%" }}>
        <div className="inner flex flex-col cursor-pointer">
          <div className="pos-relative overflow-hidden pt-66% pr-8px pl-8px pb-0">
            <img
              src={picture_url}
              className="pos-absolute left-0px top-0px w-100% h-100% b-rd-3px"
            />
          </div>
          <div
            className="font-size-12px font-700 mt-10px mb-5px"
            style={{ color: verify_info?.text_color }}
          >
            {verify_info?.messages.join("·")}
          </div>
          <div className="font-size-16px font-700 overflow-hidden text-ellipsis line-clamp-2">
            {name}
          </div>
          <div className="font-size-12px font-600 mt-8px mb-8px">
            {price_format}/晚
          </div>
          <Rate allowHalf defaultValue={star_rating ?? 0}/>
        </div>
      </div>
    );
  }
);

export default RoomItem;

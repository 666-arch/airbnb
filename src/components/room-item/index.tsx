import React, { memo } from "react";
interface IProps extends GoodPriceChildInfo {
  width?: React.CSSProperties["width"];
}
const RoomItem: React.FC<IProps> = memo(
  ({ width, name, picture_url, verify_info, price_format }) => {
    return (
      <div
        className="p-8px cursor-pointer"
        style={{ width: width ?? "25%"}}
      >
        <div
          className="inner flex flex-col"
        >
          <div className="pos-relative overflow-hidden pt-66% pr-8px pl-8px pb-0">
            <img src={picture_url} className="pos-absolute left-0px top-0px w-100% h-100% b-rd-3px" />
          </div>
          <div className="font-size-12px font-700 color-#39576a mt-10px mb-5px">{verify_info?.messages.join("-")}</div>
          <div className="font-size-16px font-700 overflow-hidden text-ellipsis line-clamp-2">{name}</div>
          <div className="font-size-12px font-600 mt-8px mb-8px">{price_format}/晚</div>
        </div>
      </div>
    );
  }
);

export default RoomItem;

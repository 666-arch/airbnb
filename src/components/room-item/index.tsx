import React, { memo } from "react";
interface IProps extends GoodPriceChildInfo {
  width?: React.CSSProperties["width"];
}
const RoomItem: React.FC<IProps> = memo(({width, name}) => {
  return (
    <div style={{ width: width ?? "25%" }}>
      <div>{name}</div>
    </div>
  );
});

export default RoomItem;

import React, { memo } from "react";
import RoomItem from "../room-item";
interface IProps {
  _goodPriceInfo: IGoodPriceInfoList;
}
const SectionRooms: React.FC<IProps> = memo(({ _goodPriceInfo }) => {
  return (
    <div className="flex flex-wrap mr--8px ml--8px">
      {_goodPriceInfo.list?.slice(0, 8).map((item) => (
        <RoomItem
          key={item.name}
          name={item.name}
          picture_url={item.picture_url}
          verify_info={item.verify_info}
          price_format={item.price_format}
          star_rating={item.star_rating}
        />
      ))}
    </div>
  );
});

export default SectionRooms;

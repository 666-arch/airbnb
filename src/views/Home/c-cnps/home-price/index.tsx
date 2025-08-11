import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import React, { memo } from "react";
interface IProps {
  _goodPriceInfo: IHomeRoomInfoList;
}
const HomePrice: React.FC<IProps> = memo(({ _goodPriceInfo }) => {
  return (
    <div className="good-price-info flex flex-col">
      <SectionHeader
        title={_goodPriceInfo?.title}
        subtitle={_goodPriceInfo?.subtitle}
      />
      <SectionRooms roomList={_goodPriceInfo.list} />
    </div>
  );
});
export default HomePrice;

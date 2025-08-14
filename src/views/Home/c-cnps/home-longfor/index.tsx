import LongForItem from "@/components/longfor-item";
import SectionHeader from "@/components/section-header";
import React, { memo } from "react";
interface IProps {
  _goodLongFor: IHomeRoomInfoList;
}
const HomeLongFor: React.FC<IProps> = memo(({ _goodLongFor }) => {
  return (
    <div className="home-longfor-info flex flex-col">
      <SectionHeader
        title={_goodLongFor.title}
        subtitle={_goodLongFor.subtitle}
      />
      <div className="flex">
        {_goodLongFor.list.map((item) => (
          <LongForItem itemData={item} />
        ))}
      </div>
    </div>
  );
});
export default HomeLongFor;

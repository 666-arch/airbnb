import ScrollView from "@/base-ui/scroll-view";
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
      <ScrollView>
        <div className="flex gap-16px">
          {_goodLongFor.list.map((item) => (
            <LongForItem itemData={item} />
          ))}
        </div>
      </ScrollView>
    </div>
  );
});
export default HomeLongFor;

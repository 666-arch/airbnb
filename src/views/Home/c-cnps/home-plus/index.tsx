import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionHeader from "@/components/section-header";
import React, { memo } from "react";
interface IProps {
  _goodPlusInfo: IHomeRoomInfoList;
}
const HomePlus: React.FC<IProps> = memo(({ _goodPlusInfo }) => {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title={_goodPlusInfo.title}
        subtitle={_goodPlusInfo.subtitle}
      />
      <ScrollView>
        {_goodPlusInfo.list.map((item) => (
          <RoomItem
            key={item.id}
            name={item.name}
            picture_url={item.picture_url}
            price_format={item.price_format}
            width={'20%'}
          />
        ))}
      </ScrollView>
    </div>
  );
});

export default HomePlus;

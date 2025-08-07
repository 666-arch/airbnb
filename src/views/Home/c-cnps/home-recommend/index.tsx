import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import React, { memo, useState } from "react";
interface IProps {
  _goodHotRecommendInfo: IHomeDiscountInfoList;
}
const HomeHotRecommend: React.FC<IProps> = memo(({ _goodHotRecommendInfo }) => {
  const initTabName = Object.keys(_goodHotRecommendInfo.dest_list)[0];
  const _tabNames = _goodHotRecommendInfo.dest_address.map((item) => item.name);
  const [tabName, setTabName] = useState(initTabName);
  const handleTabClick = (index: number, name: string) => {
    setTabName(name);
  };
  return (
    <div className="good-hotRecommend-info">
      <SectionHeader title={_goodHotRecommendInfo?.title} />
      <SectionTabs tabNames={_tabNames} tabClick={handleTabClick} />
      <SectionRooms
        roomList={_goodHotRecommendInfo?.dest_list?.[tabName]}
        width={"33%"}
      />
    </div>
  );
});

export default HomeHotRecommend;

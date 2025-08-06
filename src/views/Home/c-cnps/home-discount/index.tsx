import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import React, { memo, useState, useCallback } from "react";
interface IProps {
  _goodDiscountInfo: IHomeDiscountInfoList;
}
const HomeDiscount: React.FC<IProps> = memo(({ _goodDiscountInfo }) => {
  const _tabNames = _goodDiscountInfo.dest_address?.map((item) => item?.name);
  const initTabName = Object.keys(_goodDiscountInfo.dest_list)[0];
  const [tabName, setTabName] = useState<string>(initTabName);
  const handleTabClick = useCallback((index: number, name: string) => {
    setTabName(name);
  }, []);
  return (
    <div className="good-discount-info flex flex-col">
      <SectionHeader
        title={_goodDiscountInfo.title}
        subtitle={_goodDiscountInfo.subtitle}
      />
      <SectionTabs tabNames={_tabNames} tabClick={handleTabClick} />
      <SectionRooms
        roomList={_goodDiscountInfo?.dest_list?.[tabName]}
        width={"33%"}
      />
    </div>
  );
});

export default HomeDiscount;

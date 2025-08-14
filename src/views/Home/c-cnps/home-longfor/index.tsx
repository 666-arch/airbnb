import SectionHeader from "@/components/section-header";
import React, { memo } from "react";
interface IProps {
  _goodLongFor: IHomeRoomInfoList;
}
const HomeLongFor: React.FC<IProps> = memo(({ _goodLongFor }) => {
  return <div className="home-longfor-info">
    <SectionHeader title={_goodLongFor.title} subtitle={_goodLongFor.subtitle}/>

  </div>;
});
export default HomeLongFor;

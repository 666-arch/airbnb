import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import React, { memo } from "react";
interface IProps {
  _goodHighScoreInfo: IHomeRoomInfoList;
}
const HomeHighScore: React.FC<IProps> = memo(({ _goodHighScoreInfo }) => {
  return (
    <div className="good-highScore-info">
      <SectionHeader
        title={_goodHighScoreInfo?.title}
        subtitle={_goodHighScoreInfo?.subtitle}
      />
      <SectionRooms roomList={_goodHighScoreInfo.list} />
    </div>
  );
});

export default HomeHighScore;

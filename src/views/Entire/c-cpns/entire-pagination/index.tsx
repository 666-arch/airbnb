import React, { memo } from "react";
import { Pagination } from "antd";
import { useSelector } from "react-redux";
const EntirePagintion = memo(({}) => {
  const { currentPage, roomList, totalCount } = useSelector(
    (state: {
      entire: {
        currentPage: number;
        roomList: RoomListType[];
        totalCount: number;
      };
    }) => ({
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
    })
  );
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  return (
    <div className="flex flex-col items-center gap-10px">
      <Pagination defaultCurrent={1} total={totalCount} />
      <div>
        第 {startCount} - {endCount} 个房源，共超过 300 间
      </div>
    </div>
  );
});

export default EntirePagintion;

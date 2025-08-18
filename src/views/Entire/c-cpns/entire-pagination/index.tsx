import React, { memo } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import { Action } from "@reduxjs/toolkit";
const EntirePagintion = memo(({}) => {
  const { currentPage, totalCount } = useSelector(
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
  const dispatch = useDispatch();
  const changePage = (pagesize: number) => {
    //更新页码
    window.scrollTo(0, 0)
    // dispatch(changeCurrentPageAction(pagesize - 1));
    dispatch(fetchRoomListAction(pagesize - 1) as unknown as Action)
  };
  return (
    <div className="flex flex-col items-center gap-10px">
      <Pagination defaultCurrent={1} total={totalCount} onChange={changePage} />
      <div>
        第 {startCount} - {endCount} 个房源，共超过 300 间
      </div>
    </div>
  );
});

export default EntirePagintion;

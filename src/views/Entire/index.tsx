import React, { memo, useEffect } from "react";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagintion from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import { Action } from "@reduxjs/toolkit";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction() as unknown as Action);
  }, [dispatch]);
  return (
    <div className="entire-page-wrapper">
      <EntireFilter />
      <EntireRooms />
      <EntirePagintion />
    </div>
  );
});

export default Entire;

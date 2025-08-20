import React, { memo, useEffect } from "react";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagintion from "./c-cpns/entire-pagination";
import { useDispatch } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreators";
import { Action } from "@reduxjs/toolkit";
import AppHeader from "@/components/app-header";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction() as unknown as Action);
    dispatch(changeHeaderConfigAction({isFixed: false}) as unknown as Action)
  }, [dispatch]);
  return (
    <div className="entire-page-wrapper">
      <AppHeader/>
      <EntireFilter />
      <EntireRooms />
      <EntirePagintion />
    </div>
  );
});

export default Entire;

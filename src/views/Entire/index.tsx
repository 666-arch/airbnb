import React, { memo } from "react";
import EntireFilter from "./c-cpns/entire-filter";
import EntireRooms from "./c-cpns/entire-rooms";
import EntirePagintion from "./c-cpns/entire-pagination";

const Entire = memo(() => {
  
  return (
    <div className="entire-page-wrapper">
      <EntireFilter />
      <EntireRooms />
      <EntirePagintion />
    </div>
  );
});

export default Entire;

import React, { memo } from "react";

const Entire = memo(() => {
  return <div className="entire-page-wrapper">
    <div className="entire-page-filter"></div>
    <div className="entire-page-list"></div>
    <div className="entire-page-pagination"></div>
  </div>;
});

export default Entire;

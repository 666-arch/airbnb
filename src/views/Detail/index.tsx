import React, { memo } from "react";
import { useSelector } from "react-redux";
import DetailPictures from "./c-cpns/detail-pictures";

const Detail = memo(({}) => {
  return (
    <div>
      <DetailPictures />
    </div>
  );
});

export default Detail;

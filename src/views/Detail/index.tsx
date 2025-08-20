import React, { memo } from "react";
import { useSelector } from "react-redux";
import DetailPictures from "./c-cpns/detail-pictures";
import AppHeader from "@/components/app-header";

const Detail = memo(({}) => {
  return (
    <div>
      <AppHeader/>
      <DetailPictures />
    </div>
  );
});

export default Detail;

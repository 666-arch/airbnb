import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
const DetailPictures = memo(({}) => {
  const { detailInfo } = useSelector(
    (state: { detail: { detailInfo: RoomListType } }) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  const data = detailInfo as RoomListType;
  return (
    <div className="picture-info flex">
      <div className="left">
        <div className="item">
          <img src={data?.picture_urls?.[0]} />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {data?.picture_urls?.slice(1, 5).map((item, index) => (
          <div className="item" key={index}>
            <img src={item} />
            <div className="cover"></div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default DetailPictures;

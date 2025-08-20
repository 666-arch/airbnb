import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import { changeDetailInfoAction } from "@/store/modules/detail";
import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface IProps {
  _goodPlusInfo: IHomeRoomInfoList;
}
const HomePlus: React.FC<IProps> = memo(({ _goodPlusInfo }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleItemClick = useCallback((item: RoomListType) => {
    // console.log('itemclick',item);
    dispatch(changeDetailInfoAction(item))
    navigate("/detail")
  },[navigate, dispatch])
  return (
    <div className="flex flex-col">
      <SectionHeader
        title={_goodPlusInfo.title}
        subtitle={_goodPlusInfo.subtitle}
      />
      <ScrollView>
        {_goodPlusInfo.list.map((item) => (
          <RoomItem
            key={item.id}
            // name={item.name}
            // picture_url={item.picture_url}
            // price_format={item.price_format}
            itemData={item}
            width={"20%"}
            itemClick={handleItemClick}
          />
        ))}
      </ScrollView>
      <SectionFooter name="Plus"/>
    </div>
  );
});

export default HomePlus;

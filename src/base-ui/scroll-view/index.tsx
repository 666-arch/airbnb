import IconArrowLeft from "@/assets/svg/icon_arrow_left";
import IconArrowRight from "@/assets/svg/icon_arrow_right";
import React, { memo, useEffect, useRef, useState } from "react";
interface IProps {
  children?: React.ReactNode;
}
const ScrollView: React.FC<IProps> = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState<boolean>(false);
  const [showLeftBtn, setShowLeftBtn] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
//   const tabIndexRef = useRef<number>(0);
  const totalDistanceRef = useRef<number>(0);
  const slotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (slotRef.current) {
      const ctxClientWidth = slotRef.current.clientWidth; //内容可视长度
      const ctxScrollWidth = slotRef.current.scrollWidth; //滚动条长度
      const totalDistance = ctxScrollWidth - ctxClientWidth; //可滚动距离总长度
      totalDistanceRef.current = totalDistance;
      setShowRightBtn(totalDistance > 0);
    }
  }, [props.children]);
  const handleControlClick = (isRight: boolean) => {
    if (slotRef.current) {
      const newTabIndex = isRight ? tabIndex + 1 : tabIndex - 1;
      const childElement = slotRef.current.children[newTabIndex] as HTMLElement;
      slotRef.current.style.transform = `translate(-${childElement?.offsetLeft}px)`;
      setShowRightBtn(totalDistanceRef.current > childElement?.offsetLeft);
      setShowLeftBtn(childElement?.offsetLeft > 0);
      setTabIndex(newTabIndex);
    }
  };
  return (
    <div className="scroll-view-info flex pos-relative items-center">
      {showLeftBtn && (
        <div
          className="cursor-pointer pos-absolute left--20px"
          onClick={() => handleControlClick(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      <div className="overflow-hidden">
        <div className="slot flex gap-19px" ref={slotRef}>
          {props.children}
        </div>
      </div>
      {showRightBtn && (
        <div
          className="cursor-pointer pos-absolute right--10px"
          onClick={() => handleControlClick(true)}
        >
          <IconArrowRight />
        </div>
      )}
    </div>
  );
});

export default ScrollView;

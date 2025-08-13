import React, { memo, useEffect, useRef, useState } from "react";
interface IProps {
  children?: React.ReactNode;
}
const ScrollView: React.FC<IProps> = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState<boolean>(false);
  const [showLeftBtn, setShowLeftBtn] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const tabIndexRef = useRef<number>(0)
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
    // const newTabIndex = tabIndex + 1;
    const newTabIndex = isRight ? tabIndex + 1 : tabIndex -1;
    const childElement = slotRef.current.children[newTabIndex];
    slotRef.current.style.transform = `translate(-${childElement.offsetLeft}px)`;
    setShowRightBtn(totalDistanceRef.current > childElement.offsetLeft);
    setShowLeftBtn(childElement.offsetLeft > 0);
    setTabIndex(newTabIndex);
  };
  return (
    <div className="scroll-view-info pos-relative overflow-hidden">
      {showLeftBtn && (
        <button onClick={() => handleControlClick(false)}>左边按钮</button>
      )}
      {showRightBtn && (
        <button onClick={() => handleControlClick(true)}>右边按钮</button>
      )}
      <div className="slot flex gap-18px" ref={slotRef}>
        {props.children}
      </div>
    </div>
  );
});

export default ScrollView;

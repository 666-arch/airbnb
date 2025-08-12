import React, { memo, useEffect, useRef, useState } from "react";
interface IProps {
  children?: React.ReactNode;
}
const ScrollView: React.FC<IProps> = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState<boolean>(false);
  const slotRef = useRef<HTMLDivElement>(null);
  const [tabIndex, setTabIndex] = useState<number>(0);
  useEffect(() => {
    if (slotRef.current) {
      const ctxClientWidth = slotRef.current.clientWidth;
      const ctxScrollWidth = slotRef.current.scrollWidth; //可滚动距离
      const totalDistance = ctxScrollWidth - ctxClientWidth;
      setShowRightBtn(totalDistance > 0);
    }
  }, [props.children]);
  const handleRightClick = () => {
    const newTabIndex = tabIndex + 1;
    setTabIndex(newTabIndex)
    const childElement = slotRef.current.children[newTabIndex]
    console.log('---', childElement.offsetLeft)
  };
  return (
    <div className="scroll-view-info">
      <button>左边按钮</button>
      {showRightBtn && <button onClick={handleRightClick}>右边按钮</button>}
      <div className="slot overflow-hidden flex gap-18px pos-relative" ref={slotRef}>
        {props.children}
      </div>
    </div>
  );
});

export default ScrollView;

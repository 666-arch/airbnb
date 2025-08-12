import React, { memo, useEffect, useRef, useState } from "react";
interface IProps {
  children?: React.ReactNode;
}
const ScrollView: React.FC<IProps> = memo((props) => {
  const [showRightBtn, setShowRightBtn] = useState<boolean>(false);
  const slotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (slotRef.current) {
      const ctxOffsetWidth = slotRef.current.offsetWidth;
      const ctxScrollWidth = slotRef.current.scrollWidth; //可滚动距离
      ctxScrollWidth > ctxOffsetWidth && setShowRightBtn(true);
    }
  }, []);
  return (
    <div className="scroll-view-info">
      <button>左边按钮</button>
      {showRightBtn && <button>右边按钮</button>}
      <div className="slot overflow-hidden" ref={slotRef}>
        {props.children}
      </div>
    </div>
  );
});

export default ScrollView;

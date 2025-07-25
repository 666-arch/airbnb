import { ForwardedRef, forwardRef, memo } from "react";

const HeaderModal = memo(
  forwardRef(({}, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="pos-absolute shadow-[0_0_15px_#cccccc] right-24px top-90px w-160px h-200px flex flex-col justify-around bg-#FFF border-rd-10px pl-10px font-size-14px color-#000"
      >
        <div className="flex flex-col gap-15px">
          <div className="pointer-box">注册</div>
          <div className="pointer-box">登录</div>
        </div>
        <div className="border-b-1 border-b-solid border-b-#e6e6e6"></div>
        <div className="flex flex-col gap-15px">
          <div className="pointer-box">出租房源</div>
          <div className="pointer-box">开展体验</div>
          <div className="pointer-box">帮助</div>
        </div>
      </div>
    );
  })
);

export default HeaderModal;

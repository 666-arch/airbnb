import { memo } from "react";

const HeaderModal = memo(() => {
  return (
    <div className="border-1 border-solid border-#000 pos-absolute right-24px top-90px w-160px h-200px flex flex-col justify-around gap-10px bg-#FFF border-rd-10px pl-10px font-size-14px color-#000">
      <div className="flex flex-col gap-10px border-b-1 border-b-solid border-b-#e6e6e6">
        <div>注册</div>
        <div>登录</div>
      </div>
      <div className="flex flex-col gap-10px">
        <div>出租房源</div>
        <div>开展体验</div>
        <div>帮助</div>
      </div>
    </div>
  );
});

export default HeaderModal;

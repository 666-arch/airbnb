import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconProfile from "@/assets/svg/icon_profile";
import { memo, useState } from "react";
import HeaderModal from "../header-modal";
import { createPortal } from "react-dom";

const HeaderRight = memo(() => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex flex-1 justify-end items-center gap-25px pos-relative">
      <div className="flex items-center gap-16px font-size-14px font-600">
        <span className="cursor-pointer hover:bg-#afaeaea1 border-rd-10px p-8px">
          登录
        </span>
        <span className="cursor-pointer hover:bg-#afaeaea1 border-rd-10px p-8px">
          注册
        </span>
        <span className="cursor-pointer">
          <IconGlobal />
        </span>
      </div>
      <div
        onClick={() => {
          setShowModal(!showModal);
          console.log("----------");
        }}
        className="shadow-box flex items-center gap-15px border-rd-22px border-1 border-solid border-#ccc p-5px mr-24px cursor-pointer bg-#FFF"
      >
        <IconMenu />
        <IconProfile />
      </div>
      {showModal && createPortal(<HeaderModal />, document.body)}
    </div>
  );
});

export default HeaderRight;

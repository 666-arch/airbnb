import IconSearchBar from "@/assets/svg/icon_searchbar";
import React, { memo } from "react";

const HeaderCenter = memo(function index(props) {
  return (
    <div className="shadow-box flex gap-10px pr-10px pl-10px pt-5px pb-5px border-rd-24px cursor-pointer">
      <div>
        <input
          type="text"
          className="border-rd-24px h-32px p-10px"
          placeholder="搜索房源体验"
        />
      </div>
      <div className="flex justify-center items-center w-32px h-32px border-rd-24px bg-#FF385C">
        <IconSearchBar />
      </div>
    </div>
  );
});

export default HeaderCenter;

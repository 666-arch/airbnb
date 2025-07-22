import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";

const HeaderLeft = memo(function index(props) {
  return (
    <div className="flex flex-1 color-#FF385C">
      <div className="cursor-pointer ml-26px">
        <IconLogo />
      </div>
    </div>
  );
});

export default HeaderLeft;

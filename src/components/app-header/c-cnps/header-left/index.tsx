import IconLogo from "@/assets/svg/icon_logo";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";


const HeaderLeft = memo(() => {
  // const navigate = useNavigate();
  // const handleLogoClick = () => {
  // };
  return (
    <div className="flex flex-1 color-#FF385C">
      <div className="cursor-pointer ml-26px">
        <IconLogo />
      </div>
    </div>
  );
});

export default HeaderLeft;

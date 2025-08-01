import { memo } from "react";
import HeaderLeft from "./c-cnps/header-left";
import HeaderCenter from "./c-cnps/header-center";
import HeaderRight from "./c-cnps/header-right";
const AppHeader = memo(() => {
  return (
    <div className="app-header flex flex-items-center h-80px border-b-1 border-b-solid border-b-#eee">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
});

export default AppHeader;

import { memo } from "react";
import HeaderLeft from "./c-cnps/header-left";
import HeaderCenter from "./c-cnps/header-center";
import HeaderRight from "./c-cnps/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import "./index.less";
const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    (state: { main: { headerConfig: boolean } }) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed } = headerConfig;
  return (
    <div className={`app-header ${isFixed ? "fixedHeader" : ""}`}>
      <div className="header-content">
        <div className="header-content-top">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
        <div className="header-content-search"></div>
      </div>

      {/* <div className="cover"></div> */}
    </div>
  );
});

export default AppHeader;

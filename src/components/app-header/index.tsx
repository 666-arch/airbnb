import { memo } from "react";
import HeaderLeft from "./c-cnps/header-left";
import HeaderCenter from "./c-cnps/header-center";
import HeaderRight from "./c-cnps/header-right";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
const AppHeader = memo(() => {
  const { headerConfig } = useSelector(
    (state: { main: { headerConfig: boolean } }) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed } = headerConfig;
  return (
    <div
      className={classNames(
        "app-header flex flex-items-center h-80px border-b-1 border-b-solid border-b-#eee",
        {
          "fixedHeader": headerConfig,
        }
      )}
    >
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
});

export default AppHeader;

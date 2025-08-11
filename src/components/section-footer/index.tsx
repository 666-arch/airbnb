import IconMoreArrow from "@/assets/svg/icon_more_arrow";
import { memo } from "react";

const SectionFooter = memo(() => {
  return <div className="section-footer-info flex items-center gap-5px">
    <span>查看全部</span>
    <IconMoreArrow/>
  </div>;
});

export default SectionFooter;
 
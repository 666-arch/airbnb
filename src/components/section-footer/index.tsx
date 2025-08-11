import IconMoreArrow from "@/assets/svg/icon_more_arrow";
import { memo } from "react";
interface IProps {
  name?: string;
}
const SectionFooter: React.FC<IProps> = memo(({ name }) => {
  return (
    <div className="section-footer-info flex items-center gap-5px font-size-17px font-700">
      <span className="cursor-pointer">
        {name ?  `查看${name}更多房源` : "查看全部" }
      </span>
      <IconMoreArrow />
    </div>
  );
});
export default SectionFooter;

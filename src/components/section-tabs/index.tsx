import React, { memo } from "react";
interface IProps {
  tabNames: Array<string>;
}
const SectionTabs: React.FC<IProps> = memo(({ tabNames }) => {
  return (
    <div className="tab-names flex gap-10px">
      {tabNames.map((name) => (
        <div
          className="flex justify-center items-center w-80px h-35px bg-green cursor-pointer border-rd-5px"
          key={name}
        >
          {name}
        </div>
      ))}
    </div>
  );
});
export default SectionTabs;

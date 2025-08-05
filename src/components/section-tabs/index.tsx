import React, { memo, useState } from "react";
interface IProps {
  tabNames: Array<string>;
}
const SectionTabs: React.FC<IProps> = memo(({ tabNames }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleClickItem = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="tab-names flex gap-8px">
      {tabNames?.map((name, index) => (
        <div
          className="flex justify-center items-center py-14px px-16px cursor-pointer border-0.5px border-solid border-rd-5px"
          key={name}
          onClick={() => handleClickItem(index)}
          style={
            currentIndex === index
              ? { backgroundColor: "green", borderColor: "#d8d8d8" }
              : { backgroundColor: "", borderColor: "#d8d8d8" }
          }
        >
          {name}
        </div>
      ))}
    </div>
  );
});
export default SectionTabs;

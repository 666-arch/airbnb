import React, { memo, useState } from "react";
interface IProps {
  tabNames: Array<string>;
  tabClick: (index: number, name: string) => void;
}
const SectionTabs: React.FC<IProps> = memo(({ tabNames, tabClick }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleClickItem = (index: number, name: string) => {
    setCurrentIndex(index);
    tabClick(index, name);
  };
  return (
    <div className="tab-names flex gap-8px">
      {tabNames?.map((name, index) => (
        <div
          className="whitespace-pre flex justify-center items-center py-10px px-20px cursor-pointer border-0.5px border-solid border-rd-5px"
          key={name}
          onClick={() => handleClickItem(index, name)}
          style={
            currentIndex === index
              ? {
                  backgroundColor: "#00848A",
                  borderColor: "#00848A",
                  color: "#FFF",
                }
              : { backgroundColor: "", borderColor: "#d8d8d8", color: "#000" }
          }
        >
          {name}
        </div>
      ))}
    </div>
  );
});
export default SectionTabs;

import React, { memo, useState } from "react";
import filterData from "@/assets/data/filter_data.json";
import classNames from "classnames";
const EntireFilter = memo(({}) => {
  const [selFilterName, setSelFilterName] = useState<Array<string>>([]);
  const handleFilterClick = (filterName: string) => {
    const newSelFilterName = [...selFilterName];
    if (selFilterName.includes(filterName)) {
      const findFilterNameIndex = selFilterName.findIndex(item=>item === filterName)
      newSelFilterName.splice(findFilterNameIndex, 1)
    }else{
      newSelFilterName.push(filterName);
    }
    setSelFilterName(newSelFilterName);
  };
  return (
    <div className="entire-filter-wrapper flex gap-10px py-10px px-28px">
      {filterData.map((item) => (
        <div
          key={item}
          className={classNames(
            "py-10px px-15px border-1px border-gray border-solid rd-10px cursor-pointer",
            { "btn-active": selFilterName.includes(item) }
          )}
          onClick={() => handleFilterClick(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
});
export default EntireFilter;

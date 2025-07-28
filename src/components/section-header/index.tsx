import React, { memo } from "react";
interface IProps {
  title: string;
  subtitle?: string;
}
const SectionHeader: React.FC<IProps> = memo(
  ({ title, subtitle }) => {
    return (
      <div className="color-#222">
        <h2 className="font-size-22px font-700 mb-16px cursor-pointer">{title}</h2>
        { subtitle && <div className="font-size-16px mb-20px cursor-pointer">{subtitle}</div> } 
      </div>
    );
  }
);

export default SectionHeader;

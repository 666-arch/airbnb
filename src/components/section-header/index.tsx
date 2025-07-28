import React, { memo } from "react";
interface IProps {
  title: string;
  subtitle?: string;
}
const SectionHeader: React.FC<IProps> = memo(({ title, subtitle }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
});

export default SectionHeader;

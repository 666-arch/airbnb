import React, { memo } from "react";
import footerData from "@/assets/data/footer.json";

const AppFooter = memo(() => {
  return (
    <div className="app-footer w-100% flex flex-col items-center gap-50px">
      <div className="w-1023px flex justify-between">
        {footerData.map((item) => {
          return (
            <div className="flex flex-col gap-12px" key={item.name}>
              <div className="name">{item.name}</div>
              <div className="flex flex-col gap-5px">
                {item.list.map((iten) => {
                  return <div key={iten}>{iten}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="statement">
        © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
        全国旅游投诉渠道 12301
      </div>
    </div>
  );
});

export default AppFooter;

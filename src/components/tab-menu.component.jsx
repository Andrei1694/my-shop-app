import React, { useState } from "react";
import HorisontalCard from "./horisontal-card.component";

const tabs = [
  { id: "home", label: "Music" },
  { id: "profile", label: "Profile" },
  { id: "settings", label: "Settings" },
  { id: "contact", label: "Contact" },
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-[327px] mx-auto mt-8 shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-3xs bg-text-white h-[386px] overflow-hidden text-left text-xs text-ui-gray-80 font-text-label-12px-12">
      <div className="w-[295px] h-[26px] block overflow-x-hidden mt-6 mx-auto">
        <nav className="items-center justify-between w-[275px] h-[26px] mx-auto flex border-b border-gray-200">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`box-content text-base leading-[25px] inline-block text-center cursor-pointer relative ${
                activeTab === tab.id
                  ? "font-extrabold text-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-2 p-4">
        {/* Content for each tab */}
        {activeTab === "home" && (
          <div>
            <div className="flex flex-col gap-4">
              <HorisontalCard />
              <HorisontalCard />
              <HorisontalCard />
            </div>
          </div>
        )}
        {activeTab === "profile" && <div>Profile Content</div>}
        {activeTab === "settings" && <div>Settings Content</div>}
        {activeTab === "contact" && <div>Contact Content</div>}
      </div>
    </div>
  );
};

export default TabMenu;

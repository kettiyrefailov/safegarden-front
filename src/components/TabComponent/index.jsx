import React, { useState } from "react";
import { TabContainer } from "./styled";

export const TabComponent = ({ title, tabs = {} }) => {
  const [activeTabIndex, setTabActiveIndex] = useState(0);
  const activeTab = (index) => {
    setTabActiveIndex(index);
  };

  return (
    <TabContainer>
      <div className="body">
        {Object.keys(tabs).length === 0 ? (
          <div>No Tabs</div>
        ) : (
          <div>
            <div className="tabs">
              {tabs.map((tab, index) => (
                <label
                  key={index}
                  className={index === activeTab ? "active-tab" : "tab"}
                  onClick={() => activeTab(index)}
                >
                  {tab.name}
                </label>
              ))}
            </div>
            <div className="content">{tabs[activeTabIndex].content}</div>
          </div>
        )}
      </div>
    </TabContainer>
  );
};

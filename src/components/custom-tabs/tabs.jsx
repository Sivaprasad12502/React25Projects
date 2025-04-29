import React, { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTiabIdnex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex){
    setCurrentTabIndex(getCurrentIndex)
    onChange(getCurrentIndex)
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem,index) => (
          <div className={`tab-item ${currentTiabIdnex ===index?"active":""}`} onClick={()=>handleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{color:'red'}}>
        {tabsContent[currentTiabIdnex] && tabsContent[currentTiabIdnex].content}
      </div>
    </div>
  );
}

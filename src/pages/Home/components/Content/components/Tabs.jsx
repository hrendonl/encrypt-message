import { useState } from "react";
import { TabForm } from "./components/TabForm";
import "./Tabs.css";

export const Tabs = () => {
  const [tabActivated, setTabActivated] = useState("encrypt");
  const tabs = [
    { label: "Cifrar", value: "encrypt" },
    { label: "Decifrar", value: "Decrypt" },
  ];

  return (
    <div className="tabs-container">
      <nav className="tabs">
        <ul>
          {tabs.map((tab) => (
            <li
            onClick={()=>setTabActivated(tab.value)}
            key={tab.value}
              className={`nav-item ${
                tab.value == tabActivated && "nav-item-active"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="tab-content">
        <TabForm tabActivated={tabActivated}/>
      </div>
    </div>
  );
};

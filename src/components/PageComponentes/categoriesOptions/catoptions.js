import React from "react";
import { ListItems, List, Div } from "./pruebastyle";
import { useState } from "react";

function MessageTab() {
  return (
    <Tabs>
      <div label="Tacos">Recent component</div>
      <div label="Hamburguesa">Unread component</div>
      <div label="Pizza">Groups component</div>
      <div label="Bebidas">Groups component</div>
    </Tabs>
  );
}

function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);

  const switchTabs = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Div className="col-12 col-lg-6">
      <List>
        {props.children.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={switchTabs}
            />
          );
        })}
      </List>
    </Div>
  );
}

function Tab(props) {
  const { label, onClick, activeTab } = props;

  return (
    <ListItems activeTab={activeTab === label} onClick={() => onClick(label)}>
      {label}
    </ListItems>
  );
}

export default function CategoriesOptions() {
  return (
      <MessageTab/>
  );
}

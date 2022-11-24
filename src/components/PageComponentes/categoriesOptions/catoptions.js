import React from "react";
import { ListItems, List, Div } from "./pruebastyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MessageTab() {
  return (
    <Tabs>
      <div label="Carne" id="1"></div>
      <div label="Hamburguesa" id="2"></div>
      <div label="Tacos" id="3"></div>
      <div label="Bebidas" id="4"></div>
    </Tabs>
  );
}

function Tabs(props) {

  const id = window.location.href.split('/')[4]
  const [activeTab, setActiveTab] = useState(props.children[id-1].props.label);


  const switchTabs = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Div className="col-12 col-lg-6">
      <List>
        {props.children.map((child) => {
          const { label } = child.props;
          const { id }= child.props;
          return (
            <Tab
              id={id}
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
  const { id, label, onClick, activeTab } = props;
  let nav = useNavigate();

  return (
    <ListItems activeTab={activeTab === label} to={`/menu/${id}`} onClick={() => {onClick(label); nav("/menu/"+id); window.location.reload();}}>
      {label}
    </ListItems>
  );
}

export default function CategoriesOptions() {

  return (
      <MessageTab/>
  );
}

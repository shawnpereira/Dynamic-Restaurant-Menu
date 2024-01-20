import React, { useState } from "react";
import "./style.css";
import MenuCard from "./MenuCard";
import Menu from "../MenuApi";
import Navbar from "./Navbar";

const UniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "Show All",
];

const Restaurant = () => {
  const [Data, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(UniqueList);
  const filterItem = (category) => {
    if (category === "Show All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      <MenuCard Data={Data} />
    </>
  );
};

export default Restaurant;

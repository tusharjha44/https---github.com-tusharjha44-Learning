import React from "react";
import { useState } from "react";
import MenuList from "./MenuList";
import "./styles.css";
import {FaMinus,FaPlus} from "react-icons/fa"

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggle = (getChildren) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getChildren]: !displayCurrentChildren[getChildren],
    });
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={20}/> : <FaPlus color="#fff" size={20}/>}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;

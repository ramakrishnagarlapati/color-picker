import React from "react";

import "./ColorBox.css";
const ColorBox = ({ background, name }) => {
  return (
    <div className="ColorBox" style={{ background: background }}>
      <span>{name}</span>
      <span>MORE</span>
    </div>
  );
};

export default ColorBox;

import React from "react";
import '../style/TileComponent.css';

const CustomTile = (props) => {
  const name = props.name;
  const count = props.count;
  return (
    <div className="tile-custom">
        <div>
            <div className="item-name">{name}</div>
            <div className="item-count">{count}</div>
        </div>
    </div>
  );
};

export default CustomTile;
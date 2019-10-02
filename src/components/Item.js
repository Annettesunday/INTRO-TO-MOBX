import React from "react";
import Button from "./Button";

const Item = ({ item }) => {
  return (
    <div className="field">
      <div>
        <input
          type="checkbox"
          tabIndex="0"
          className="hidden"
          onClick={item.toggle}
        ></input>
        <label>{item.value}</label>
        <Button onClick={item.remove}>remove</Button>
      </div>
    </div>
  );
};

export default Item;

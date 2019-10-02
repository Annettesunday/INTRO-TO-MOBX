import React from "react";
import Item from "./Item";
import Search from "./Search";

const ItemList = ({ items, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Search />
      {items.map(item => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;

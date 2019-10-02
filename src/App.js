import React from "react";
import { observer, inject } from "mobx-react";

import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

const PackedList = inject("store")(
  observer(({ store }) => {
    return <ItemList items={store.packedItems} title="Packed Items" />;
  })
);
const UnpackedList = inject("store")(
  observer(({ store }) => {
    return <ItemList items={store.unpackedItems} title="Unpacked Items" />;
  })
);
const App = () => {
  return (
    <div className="ui container">
      <ItemForm />
      <PackedList />
      <UnpackedList />
    </div>
  );
};

export default App;

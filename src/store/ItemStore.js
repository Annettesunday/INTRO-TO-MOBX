import { observable, action, computed } from "mobx";
import Item from "./ItemModal";

export default class ItemStore {
  @observable items = [];
  @observable packedItemsFilter = "";
  @observable unpackedItemsFilter = "";

  @action.bound
  addItem(item) {
    this.items.push(new Item(item, this));
  }

  @action.bound
  removeItem(itemToBeRemoved) {
    const newItems = this.items.filter(item => item !== itemToBeRemoved);
    this.items = newItems;
  }

  @computed get packedItems() {
    return this.items.filter(item => item.packed);
  }

  @computed get unpackedItems() {
    return this.items.filter(item => !item.packed);
  }
}


class Storage {

  constructor(name, inventory) {
    this.name = name; 
    this.inventory = inventory;
    this.nextStorage = null;
  }


  setNext(storage) {
    this.nextStorage = storage;
  }

  lookInLocalInventory = (searchItemName) => {
    return this.inventory.find(invItem => invItem.name === searchItemName);
  }

  find(itemName) {
    const foundItem = this.lookInLocalInventory(itemName);

    if (foundItem) return { ...foundItem, location: this.name }
    if (this.nextStorage) return this.nextStorage.find(itemName);
    return `Item like this ${foundItem} does not exists!`;
  }

}

module.exports = Storage;
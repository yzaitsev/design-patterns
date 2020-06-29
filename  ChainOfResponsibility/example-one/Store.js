const Storage = require('./Storage');

class Store {

  constructor(name, inventory=[]) {
    this.name = name;

    const storeFloor = new Storage('Floor store', inventory.floor);
    const storeBackroom = new Storage('Backroom store ', inventory.backroom);
    const storeLocalStore = new Storage('LocalStore store', inventory.localStore);
    const storeWarehouse = new Storage('Warehouse store', inventory.warehouse);

    storeFloor.setNext(storeBackroom);
    storeBackroom.setNext(storeLocalStore);
    storeLocalStore.setNext(storeWarehouse);

    this.storage = storeFloor;
  }


  find(itemName) {
    return this.storage.find(itemName);
  }
}



module.exports = Store;
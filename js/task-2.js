class Storage {
    #items;
    constructor(Item) {
    this.#items = Item
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const itemRemove = this.#items.indexOf(itemToRemove);
        if (itemRemove !== -1) {
            this.#items.splice(itemRemove,1)
        }
    }
} 
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

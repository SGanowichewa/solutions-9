import _ from 'lodash';

// BEGIN
export default class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item, count) {
      const existingItem = this.items.find((i) => i.item.name === item.name);
  
      if (existingItem) {
        existingItem.count += count;
      } else {
        this.items.push({
          item,
          count,
        });
      }
    }
  
    getItems() {
      return this.items;
    }
  
    getCost() {
      return this.items.reduce((acc, item) => acc + item.item.price * item.count, 0);
    }
  
    getCount() {
      return this.items.reduce((acc, item) => acc + item.count, 0);
    }
  }
// END

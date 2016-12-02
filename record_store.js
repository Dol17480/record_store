var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

RecordStore.prototype = {
  add: function(record){
    this.inventory.push(record);
  },
  list: function(){
    return this.inventory;
  },
  sell: function(record){
    this.inventory.splice(this.inventory.indexOf(record), 1);
    this.balance += record.price;
  }
};

module.exports = RecordStore;
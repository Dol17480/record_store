var Record = require("../record");
var assert = require("assert");
var RecordStore = require("../record_store")


describe("recordStore", function(){

  var recordStore;
  var record;

  beforeEach(function(){
    recordStore = new RecordStore("Plugd", "Cork", 1000);
    record = new Record("Radiohead", "A Moon Shaped Pool", 5, 10);
    record2 = new Record("Bon Jovi", "Slippery When Wet", 3, 5);
  });

  it('should have name', function(){
    assert.equal("Plugd", recordStore.name);
  });

  it('should have city', function(){
    assert.equal("Cork", recordStore.city);
  });

  it('should have balance', function(){
    assert.equal(1000, recordStore.balance);
  });

  it('should add records', function(){
    recordStore.add(record);
    assert.equal(1, recordStore.inventory.length);
  })

  it('should list inventory', function(){
    recordStore.add(record2);
    assert.deepEqual([record2], recordStore.list());
  })

 });


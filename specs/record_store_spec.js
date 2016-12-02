var Record = require("../record");
var assert = require("assert");
var RecordStore = require("../record_store")


describe("recordStore", function(){

  var recordStore;

  beforeEach(function(){
    recordStore = new RecordStore("Plugd", "Cork", 1000);
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

 });


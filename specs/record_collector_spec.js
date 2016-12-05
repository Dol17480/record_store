var Record = require("../record");
var assert = require("assert");
var RecordStore = require("../record_store")
var RecordCollector = require("../record_collector");

describe("recordCollector", function(){

  var recordCollector;

  beforeEach(function(){
    recordCollector = new RecordCollector("Jim", 100);
  });

  it('should have name', function(){
    assert.equal("Jim", recordCollector.name);
  });
})
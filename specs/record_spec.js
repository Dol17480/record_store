var Record = require("../record");
var assert = require("assert");


describe("record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Radiohead", "A Moon Shaped Pool", 5, 10);
  });

  it('should have artist', function(){
    assert.equal("Radiohead", record.artist);
  });

  it('should have title', function(){
    assert.equal("A Moon Shaped Pool", record.title);
  });

  it('should have price', function(){
    assert.equal(5, record.price);
  });

  it('should have quantity', function(){
    assert.equal(10, record.quantity);
  });



});

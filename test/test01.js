//import {Service} from '../src/Service.js';

var assert = require("assert");

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {

      //console.log(Service);

      //assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});
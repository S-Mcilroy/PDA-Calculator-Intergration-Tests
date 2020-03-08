var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("it can add 1 to 4 and get 5", function() {
    calculator.previousTotal = 4
    calculator.add(1)
    assert.strictEqual(5, calculator.runningTotal)
  })

  it("it can subtract 4 from 7 and get 3", function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.strictEqual(3, calculator.runningTotal)
  })

  it("it can multiply 3 by 5 and get 15", function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.strictEqual(15, calculator.runningTotal)
  })

  it("it can divide 21 by 7 and get 3", function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.strictEqual(3, calculator.runningTotal)
  })

  it("concatenate multiple number button clicks", function() {
    calculator.numberClick(1)
    calculator.numberClick(4)
    assert.strictEqual(14, calculator.runningTotal)
  })

  it("it can chain multiple operations together", function() {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.strictEqual(10, calculator.runningTotal)
  })

  it("it can clear the running total without affecting the calculation", function() {
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.strictEqual(15, calculator.runningTotal)
  })

});

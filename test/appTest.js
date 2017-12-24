const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('App', function(){
	it('sayHello should return hello', function(){
        let result = sayHello();
		assert.equal(result, 'hello');
	});

	it('sayHello should return type string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
	});

	it('addNumbers shold be above 5', function(){
        let result = addNumbers(5,5);
        assert.isAbove(result, 9);
	});

	it('addNumber should return type number', function(){
        let result = addNumbers(5,5);
        assert.typeOf(result, 'number');
    });
});


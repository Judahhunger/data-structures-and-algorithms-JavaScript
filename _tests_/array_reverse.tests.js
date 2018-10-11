'use strict';

const reverse_array = require('../challenges/array_reverse/array_reverse.js');

describe('array_reverse', () => {

  it('reverses the order of array or inputs', () => {
    expect(reverse_array.reverseArray([1,2,3])).toBe([3,2,1]);
  });

});
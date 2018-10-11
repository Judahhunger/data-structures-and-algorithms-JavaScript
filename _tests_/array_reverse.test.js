'use strict';

const array_reverse = require('../challenges/array_reverse.js');

describe('array_reverse', () => {
  it('reverses an array', () =>{
    let message = array_reverse.reverseArray([1,2,3]);
    expect(message).toEqual([3,2,1]);
  });
});
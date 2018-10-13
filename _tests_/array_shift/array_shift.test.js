'use strict';
const arrayShift = require('../../array_shift/array_shift.js');

describe('array_shift', () => {

  it('should place element in middle of even array', () => {
    let message = arrayShift.insertShiftArray(['A', 'B', 'D', 'E'], 'C');
    expect(message).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  it('should place element to right of non-even array', () => {
    let message = arrayShift.insertShiftArray(['A', 'B', 'D'], 'C');
    expect(message).toEqual(['A', 'B', 'C', 'D']);
  });

  it('returns the array that is used does not make a new array', () => {
    let usedArray = [1, 2, 5, 6];
    let message = arrayShift.insertShiftArray(usedArray, 4);
    expect(message).toBe(usedArray);//make sure same array is modified.
    expect(message).not.toBe([1, 2, 4, 5, 6]);//make sure not a new array
  });
});
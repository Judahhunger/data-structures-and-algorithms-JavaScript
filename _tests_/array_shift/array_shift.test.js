'use strict';
const arrayShift = require('../../array_shift/array_shift.js');

describe('array_shift', () => {

  it('will retrun element to middle of array', () => {
    let message = arrayShift.insertShiftArray(['A', 'B', 'D', 'E'], 'C');
    expect(message).toEqual(['A', 'B', 'C', 'D', 'E']);
  });


});
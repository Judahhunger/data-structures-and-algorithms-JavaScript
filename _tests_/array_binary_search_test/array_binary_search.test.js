'use strict';

const array_binary_search = require('../../challenges/array_binary_search/array_binary_search.js');

describe('array_binary_search', () => {

  it('should find index of key if key is inside array', () => {
    let message = array_binary_search.binarySearch([1, 3, 5, 8, 19, 27], 5);
    let messagetwo = array_binary_search.recursiveBinarySearch([1, 3, 5, 8, 19, 27], 5);
    expect(message).toEqual(2);
    expect(messagetwo).toEqual(2);
  });

  it('should return -1 if key is not in array', () => {
    let message = array_binary_search.binarySearch([1, 5, 27, 35, 45], 6);
    let messagetwo = array_binary_search.recursiveBinarySearch([1, 5, 27, 35, 45], 6);
    expect(message).toEqual(-1);
    expect(messagetwo).toEqual(-1);
  });

  it('should return -1 if array is empty', () => {
    let message = array_binary_search.binarySearch([], 6);
    let messagetwo = array_binary_search.recursiveBinarySearch([], 6);
    expect(message).toEqual(-1);
    expect(messagetwo).toEqual(-1);
  });

  it('should return -1 if key is empty', () => {
    let message = array_binary_search.binarySearch([1, 5, 27, 35, 45]);
    let messagetwo = array_binary_search.recursiveBinarySearch([1, 5, 27, 35, 45]);
    expect(message).toEqual(-1);
    expect(messagetwo).toEqual(-1);
  });
});
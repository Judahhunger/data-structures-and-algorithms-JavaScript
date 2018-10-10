'use strict';

//input array//
const arr = [1, 2, 3, 4];

function reverseArray(...array){
  let reversedArray = [];
  let count = 0;
  for (let i = array.length -1; i >= 0; i--) {
    reverseArray[count] = array[i];
    count++;
  }
  return reverseArray;
}
console.log(reverseArray(arr));

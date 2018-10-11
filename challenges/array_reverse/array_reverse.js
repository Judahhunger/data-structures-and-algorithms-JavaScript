'use strict';
let reverse_array = module.exports = {};
//input array//

reverse_array.reverseArray = function(...array){
  let newArray = [];
  let count = 0;
  for (let i = array.length -1; i >= 0; i--) {
    newArray[count] = array[i];
    count++;
  }
  return newArray;
};

'use strict';

function insArV(arr,val){
  let mid = Math.round(arr.length/2);
  for(var i = arr.length - 1; i >= mid; i--){
    let temp = arr[i];
    arr[i + 1] = temp;
  }
  arr[mid] = val;
  return arr;
}

console.log(insArV([1,2,4,5], 3));
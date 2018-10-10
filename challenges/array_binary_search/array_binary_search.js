'use strict';

function BinSearch(arr, key){
  let min = 0;
  let max = arr.length;
  
  while(min <= max){
    let mid = (min + max) / 2 | 0;
    console.log(mid);
    if(key === arr[mid]){
      return mid;
    }
    else if(key < arr[mid]){
      max = --mid;
    }
    else{
      min = ++mid;
    }
  }
  return -1;
}
'use strict';

function binarySearch(arr, key){
  let min = 0;
  let max = arr.length - 1;
  
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


function recursiveBinarySearch(arr, key, min=0, max=arr.length-1){
  let mid = (min + max ) / 2 | 0;
  
  switch(true){
  case min > max:
    return -1;
  case arr[mid] === key:
    return mid;
  case arr[mid] > key:
    return recursiveBinarySearch(arr, key, min, mid -1);
  default:
    return recursiveBinarySearch(arr, key, mid + 1, max);
  }
}
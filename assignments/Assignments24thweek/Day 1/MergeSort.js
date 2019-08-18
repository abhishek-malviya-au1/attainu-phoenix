function randomArray(max){
  let arr=[];
  for(let i=1 ; i<=max ; i++){
    arr.push(Math.floor(Math.random()*10));
  }
  return arr;
}

function mergeArrays(left , right){
  let merged=[];
  let smallest;
  while(left.length && right.length){
    if(left[0] < right[0]){
      smallest=left.shift();
    }else{
      smallest=right.shift();
    }

    merged.push(smallest);
  }
  if(left.length){
    merged=merged.concat(left);
  }
  if(right.length){
    merged=merged.concat(right);
  }
  return merged;
}


function mergeSort(arr){
  //Stop dividing and merging when array has only one element left
  if(arr.length===1){ return arr; }
  let middle=Math.floor(arr.length / 2);
  let left=arr.slice(0 , middle);
  let right=arr.slice(middle , arr.length);
  let leftSortedArray=mergeSort(left);
  let rightSortedArray=mergeSort(right);

  return mergeArrays(leftSortedArray , rightSortedArray);
}



let myArray=randomArray(15);
console.log(myArray);
console.log('sorting...');
console.log(mergeSort(myArray));

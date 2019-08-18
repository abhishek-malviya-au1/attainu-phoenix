const randomArray=require('./randomArray');

function quickSort(arr){
  if(arr.length <= 1){ return arr; }
  let left=[],
      right=[],
      pivot=arr.shift(),
      center=[pivot];

      while(arr.length){
        let currentElement=arr.shift();
        if(currentElement===pivot){
          center.push(currentElement);
        }else if(currentElement>pivot){
          right.push(currentElement);
        }else if(currentElement<pivot){
          left.push(currentElement);
        }
      }
      let sortedLeft=quickSort(left);
      let sortedRight=quickSort(right);
      return sortedLeft.concat(center , sortedRight);
}

let x=randomArray(10);
console.log(x);
console.log(quickSort(x));

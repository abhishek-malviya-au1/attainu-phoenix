const fs=require('fs');

function readFile(fileName , callback){
  fs.readFile(fileName , 'utf-8' , callback);
}

function sortData(err , data){
  if(err){return console.log('error reading the file..'); }
  let csv=data.trim().split('\n');


  function mergeSort(csv){

    //Stop dividing and merging when array has only one element left
    if(csv.length===1){ return csv; }
    let middle=Math.floor(csv.length / 2);
    console.log(middle);
    let left=csv.slice(0 , middle);
    let right=csv.slice(middle , csv.length);
    let leftSortedArray=mergeSort(left);
    let rightSortedArray=mergeSort(right);

    console.log(leftSortedArray ,rightSortedArray);
  }





  // for( let i=0 ; i<csv.length ; i++){
  //   for(j=0 ; j<csv.length-1 ; j++ ){
  //     let row1=csv[j].split(",");
  //     percentage1=parseFloat(row1[1]);
  //     row2=csv[j+1] ? csv[j+1].split(",") : "";
  //     percentage2=parseFloat(row2[1]);
  //
  //     if(percentage1 < percentage2){
  //       [csv[j] , csv[j+1]] = [csv[j+1] , csv[j]];
  //     }
  //   }
  // }

  //printData(csv);
}

function printData(data){
  console.log(data);
}

function main(){
  readFile('computers-datafile.csv' , sortData);
}

main()

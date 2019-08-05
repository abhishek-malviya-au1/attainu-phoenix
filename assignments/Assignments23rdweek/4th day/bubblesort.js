function randomArray(max){
    let arr=[];
    for(let i=1 ; i<=max ; i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}

function bubbleSort(arr){
    let steps=0;
    for(let i=0 ; i < arr.length ; i++){
        for(let j=0 ; j < arr.length-1; j++ ){
            steps+=1;
            if(arr[j] > arr[j+1] ){
                let tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        }
    }
    console.log('Steps: ',steps);
    return arr;
}

let myArray=randomArray(12);

console.log(myArray);
console.log('Sorting..');
console.log(bubbleSort(myArray));
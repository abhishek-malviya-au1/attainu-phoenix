function randomArray(max){
    let arr=[];
    let newarr=[]
    for(let i=1 ; i<=max ; i++){
        arr.push(Math.floor(Math.random()*10));
    }
    for(let j=0 ; j<arr.length ; j++){
        if(arr[j]%2!==0){
            newarr.push(arr[j]);
        }
    }
    return newarr
}

function bubbleSort(arr){
    let steps=0;
    let swappingHappened=false;
    for(let i=0 ; i < arr.length ; i++){
        for(let j=0 ; j < arr.length-1; j++ ){
            steps+=1;
            if(arr[j] > arr[j+1] ){
                let tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
                swappingHappened=true;
            }
        }
        if(!swappingHappened){
            break;
        }
    }
    console.log('Steps: ',steps);
    return arr;
}

let myArray=randomArray(15);

console.log(myArray);
console.log('Sorting..');
console.log(bubbleSort(myArray));
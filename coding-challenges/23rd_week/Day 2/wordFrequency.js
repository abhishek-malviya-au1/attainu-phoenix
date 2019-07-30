//Program to count frequency of a number or word in an array and return it in an object



function frequency(arr){
	let count={};	
	//initializing each element in an array into the object as 0
	for(let i=0 ; i < arr.length ; i++){
		count[arr[i]]=0;
	}
	
	//Main logic for counting the frequency by looping through the array and adding to the count when an element occurs in an array
	for(let i=0 ; i < arr.length ; i++){
		count[arr[i]]=count[arr[i]]+1;
	}
	
	
	return count;
}


//Arrays for testing
let got=["Arya" , "Sansa" , "Jon" , "Cersei" , "Jammie" , "Arya" , "Cersei" , "Drogo" , "Jon" , "Rob"];
let phoenix=["Abhishek" , "Srinivas" , "Vibha" , "Abhishek" , "Shivam" , "Vibha" , "Mousam"];


//Calling the function
console.log( frequency(got) );
console.log( frequency(phoenix) );

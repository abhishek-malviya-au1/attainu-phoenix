/* Create two Javascript functions - largest and smallest.Both of them takes an array of numbers as an input.
largest should return the largest number in the array.
smallest should return the smallest number in the array */


function largest(arr){
	 arr = arr.sort( (a , b) => a - b);
	 return arr[arr.length - 1]; 
}

function smallest(arr){
	arr = arr.sort( (a , b) => a - b);
	console.log(arr);
	 return arr[0]; 
}

function main(){
	const randomArray = require('./randomArray');
	let arr = randomArray(10);
	console.log(arr);
	console.log('Largest =>' , largest(arr));
	console.log('smallest =>' , smallest(arr));
}

main()
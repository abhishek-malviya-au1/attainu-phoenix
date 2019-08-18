/*Write a Javascript function that takes two arrays as an input 
and calculate the number of elements that belong to both of the arrays.*/

const randomArray = require('./randomArray');

function commonElementFinder(firstArr , secondArr){
	let common = [];
	//Loop through the elements one by one from the first array and
	//Check that element against all the elements in the second array
	for(let i = 0; i < firstArray.length; i++){
		for(let j = 0; j < secondArray.length; j++){
			if(firstArray[i] === secondArray[j]){
				if(common.indexOf(firstArray[i] === -1)){
					common.push(firstArray[i]);
				}
			}
		}

	}
	return common;
}


let firstArray = randomArray(6);
let secondArray = randomArray(8);
console.log(firstArray , secondArray);
console.log(commonElementFinder(firstArray , secondArray));
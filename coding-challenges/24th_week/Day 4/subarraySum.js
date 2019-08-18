const randomArray = require('./randomArray');

function maximumSum(arr){
	let maximum = 0;

	for(let i=0 ; i < arr.length ; i++){
		let sum = 0;
		for(let j = 1; j <  arr.length ; j++){
			sum += arr[j];

			if(sum > maximum){
				maximum = sum;
			}
			console.log('index ->', i, 'Sum ->' , sum);
		}
	}
	return maximum;
}

let arr = randomArray(10);
console.log(arr);
console.log('Maximum-Sum =>' ,maximumSum(arr));
/* Challenge was like:-
Write a Javascript program that prints the numbers from 1 to 100 with the following rules -
1. For numbers that are multiples of three, print Fizz instead of the number.
2. For numbers that are multiples of five print Buzz.
3. For numbers which are multiples of both three and five print FizzBuzz.*/


//Loop for looping from number 1 to number 100
for(let i=1 ; i<=100 ; i++){
  //for printing the fizzbuzz when numbers are multiple of both 3 and 5.
  if((i%3===0)&&(i%5===0)){
    console.log('fizzbuzz');
  }else
  //for printing the fizz when number is a multiple of 3.
  if(i%3===0){
    console.log('fizz');
  }else
  //for printing the buzz when number is a multiple of 5.
  if(i%5===0){
    console.log('buzz');
  }
  //for printing a number itself when it is neither the multiple of 3 nor the multiple of 5. 
  else{
    console.log(i);
  }
}

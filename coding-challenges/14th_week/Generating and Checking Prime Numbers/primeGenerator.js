let isPrime = (num) => {

    for(let i = 2; i <= num/2; i++) {
      if(num%i == 0) {
        return "not a prime number";
      }
      return "prime number";
    }
  
  };
  
  let primeNumbers = (count) => {
  
    let primes = [];
    
    for(let i = 1; i <= count; i++) {
  
      let counter = 0;
  
      for(let j = 2; j <= i; j++) {
        if(i%j == 0) {
          counter++;
        }
      }
      if(counter == 1) {
        primes.push(i);
      }
    }
  
    return primes;
  
  };
  
  console.log(isPrime(17));
  
  console.log(primeNumbers(10));
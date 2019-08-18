const Likedlist = require('./list');

class Stack extends Likedlist{
  push(value){
    this.prepend(value);
  }
}

let s= new Stack;

for(let i=1 ; i<=5 ; i++){
  s.push(Math.floor(Math.random()*100));
  s.print();
}

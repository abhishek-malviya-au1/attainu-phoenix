//Implementing stack data structure


class Stack{
    constructor(){
        this.array=[];
    }

    push(value){
        this.array.push(value);
        console.log(this.array);
    }

    pop(){
        this.array.pop();
        console.log(this.array);
    }

    print(){
        console.log(this.array);
    }


}


let stack = new Stack();

stack.push(3);
stack.push(4);
stack.push(10);
stack.push(20);
stack.push(50);
stack.push(80);


stack.print();

stack.pop();

stack.print();
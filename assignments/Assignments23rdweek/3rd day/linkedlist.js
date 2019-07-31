//Linked List Implementation

class Node{
    constructor(value , next=null){
        this.value=value;
        this.next=next;
    }

    toString(){
        return this.value;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    append(value){
        let newNode= new Node(value);

        //first check if the tail is null
        //if the tail(or head) is null that means linked list is empty
        //Then make the new node as the head and tail;
        if(!this.tail){
            //this list is empty now
            this.head=newNode;
            this.tail=newNode;
        }else{
            //if there is a tail already
            //we have to make the current tail point to the new node
            //we also have to make the new node as the new tail
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }

    prepend(value){
        let newNode= new Node(value);
        //If the head is empty that means the list is empty
        //make the new node as both head and tail
       if(!this.head){
            this.head=newNode;
            this.tail=newNode;
       }else{
           //If there is head
           //we have to make the newNode as new head
           //And then make the new head point to the old head too
           newNode.next=this.head;
           this.head=newNode;
       }
    }

    search(value){
        let currentNode=this.head;
        while(currentNode){
            if(currentNode.value===value){
                console.log(currentNode);
                return currentNode;
            }
            currentNode=currentNode.next;
        }
        return null;
    }

    print(){
        let currentNode=this.head;
        while(currentNode){
            console.log(currentNode.toString());
            currentNode=currentNode.next;
        }
    }

    delete(){}
}

let n=new LinkedList();
n.append('Abhishek');
n.append('Ravi');
n.append('Ansal');
n.append('Vibha');

n.prepend('Jaydeep');

n.search('Abhishek');
n.print();

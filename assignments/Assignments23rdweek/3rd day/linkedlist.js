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

    delete(value){
        //If the list is empty immediately return as there is nothing to look and delete
        if(!this.head){
            return null;
        }
        //If the value we want to delete is our head element then simply point the current head to the next value and return
        if(this.head.value===value){
            this.head=this.head.next;
            return;
        }
        //For other values start from the second node and go till the end
        let currentNode=this.head;
        while(currentNode.next){
            //If the value to delete is the next value to the current , 
            //set the current node's next as its next node's next
            if(currentNode.next.value===value){
                currentNode.next=currentNode.next.next;
            }
            
            currentNode=currentNode.next;

            break;
        }
            //Check if the tail has to be updated
            //If the value that needs to be deleted is the value at the tail
            //then we have to update the tail as well
            if(this.tail.value===value){
                this.tail=currentNode;
            }
        
    }
}

let n=new LinkedList();
n.append('Abhishek');
n.append('Ravi');
n.append('Ansal');
n.append('Vibha');


n.prepend('Jaydeep');
n.delete('Vibha');

n.search('Abhishek');
n.print();

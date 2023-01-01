// While storing the data (integer values) in a linked list, a programmer accidentally 
// created two linked lists. Some of the data got stored in one linked list and remaining 
// got stored in the other list. Both linked lists are in sorted form. Now the programmer 
// wants to create a single list by combining the two lists in such a way that the newly 
// created list should be in sorted order as well. Create a program that can perform this 
// task.

l1=[1,2,3,4,10];
l2=[5,6,7,8,9];
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Linked_list{
    constructor(){
        this.head=null;
    }
    insertion(value){
        let newnode=new Node(value);

        if(this.head==null || this.head.data>newnode.data){
            newnode.next=this.head;
            this.head=newnode;
        }
        else{
            let temp=this.head;

            while(temp.next!=null && temp.next.data<newnode.data){
                temp=temp.next;
            }
            newnode.next=temp.next;
            temp.next=newnode;
        }
    }
    printlinkedlist(){
        let temp=this.head;

        if(temp==null){
            console.log("linkedlist is empty");
        }else{
            while(temp!=null){
                console.log(temp.data);
                temp=temp.next;
            }
        }
        
    }
}
let obj=new Linked_list();
for(let i=0;i<l1.length;i++){
    obj.insertion(l1[i]);
}
for(let i=0;i<l2.length;i++){
    obj.insertion(l2[i]);
}
obj.printlinkedlist();

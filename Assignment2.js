/*1)Create a program that accepts the student data as input from the user. The student data should contain the following information:

●       Student id

●       Student name

●       Student marks of 5 subjects

Store this information in a tree data structure where each node represents a single student. The tree should be a binary search tree and use the percentage of each student as criteria for storing objects. After storing all the information, the user will enter the name of a student and his/her grades should be displayed on the screen.
*/ 
class Node{
    constructor(id,name,percentage){
        this.left=null;
        this.id=id;
        this.name=name;
        this.percentage=percentage;
        this.right = null;
    }
}
class binarysearch{
    constructor(){
        this.root=null;
    }
    insert(id,name,s1,s2,s3,s4,s5){
        this.root=this.insertelement(this.root,id,name,parseInt((s1+s2+s3+s4+s5)/2));
    }
    insertelement(node,id,name,perc){
        if(node == null){
            node = new Node(id,name,perc);
            return node;
        }else{
            if(perc < node.percentage){
                node.left = this.insertelement(node.left,id,name,perc);}
            else if(perc > node.percentage){
                node.right = this.insertelement(node.right,id,name,perc);
            }
            return node;
        }
    }


    searchElement(value){
        let q=[];
        let final="";
        let flag=false;
        q.push(this.root);
        while(q.length!=0){
            //console.log(q);
            this.root=q.shift();
            if(this.root.id===value){
                console.log(this.root.id,this.root.name,this.root.percentage);
                flag=true;
            }
            if(this.root.left!=null){
                q.push(this.root.left);
            }
            if(this.root.right!=null){
                q.push(this.root.right);
            }
        }
        if(flag===false){
            console.log("invalid entry");
        }
    }
}
let tree = new binarysearch();
tree.insert(10,"abc",70,87,95,85,90);
tree.insert(6,"def",50,60,70,80,90);
tree.insert(12,"ghi",20,30,40,50,60);
tree.searchElement(10);








/*
Exercise 2:

Create a program in which users can enter customer data. The customer data should contain the following information:

●       Customer Id

●       Customer Name

●       Purchase date(dd/mm/yy)

●       Bill amount

Store this information in a linked list. The program should provide three different options for viewing information:

●       View all customer data in sorted order based on bill amount

●       View total purchase amount for a specific year

●       View details of a specific customer based on name*/
class Node{
    constructor(id,name,date,amount){
        this.id=id;
        this.name=name;
        this.date=date;
        this.amount=amount;
        this.next=null;
    }
}


class linkedlist{
    constructor(){
        this.head=null;
    }
    insertion(id,name,date,amount){
        let newnode=new Node(id,name,date,amount);

        if(this.head==null || this.head.amount>=newnode.amount){
            newnode.next=this.head;
            this.head=newnode;
        }else{
            let temp=this.head;

            while(temp.next!=null && temp.next.amount<newnode.amount){
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
                console.log(temp.id,temp.name,temp.date,temp.amount);
                temp=temp.next;
            }
        }
        
    }

    specified_year(year){
        let sum=0;
        let temp=this.head;

        while(temp!=null){
            if((temp.date[6]+temp.date[7]+temp.date[8]+temp.date[9])===year){
                sum=sum+temp.amount;
            }
            temp=temp.next;
        }

        console.log(sum);
    }


    with_name(value){
        let t=this.head;
        let flag=false;

        while(t!=null){
            if(t.name===value){
                console.log(t.id,t.name,t.date,t.amount);
                flag=true;
            }
            t=t.next;
        }
        if(flag===false){
            console.log("invalid name");
        }
    }
}

let ll=new linkedlist();
ll.insertion(101,"abc","12/08/2022",150);
ll.insertion(102,"abc","12/08/2022",160);
ll.insertion(103,"abc","12/08/2022",180);
console.log("1.print all details in the sorted order");
console.log("2.give total amount in the specified year");
console.log("3.get details with the specified name")
console.log("select your choice");
let choice=3;
console.log("choice is",2);
switch(choice){
    case 1:ll.printlinkedlist();
            break;
    case 2:ll.specified_year("2022");
            break;
    case 3:ll.with_name("abc");
            break;

}
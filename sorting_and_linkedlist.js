//bubble sort
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

//quick sort
function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
function quickSortRecursive(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}







//merge sort
function merge(arr,begIndex,midIndex,endIndex){
    let sizeOne = midIndex - begIndex + 1;
    let sizeTwo = endIndex - midIndex;

    let leftArray = new Array(sizeOne);
    let rightArray = new Array(sizeTwo);

    for(let i = 0; i < sizeOne; i++){
        leftArray[i] = arr[begIndex + i];
    }

    for(let i = 0; i < sizeTwo; i++){
        rightArray[i] = arr[midIndex + 1 + i];
    }

    let i = 0;
    let j = 0;

    let k = begIndex;

    while(i < sizeOne && j < sizeTwo){
        if(leftArray[i] <= rightArray[j]){
            arr[k] = leftArray[i];
            i++;
        }else{
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }                                                                                   

    while(i < sizeOne){
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    while(j < sizeTwo){
        arr[k] = rightArray[j];
        j++;
        k++;
    }

}
function mergeSort(arr,begIndex,endIndex){
    if(begIndex < endIndex){
        let midIndex = parseInt((begIndex + endIndex)/2);
        mergeSort(arr,begIndex,midIndex);
        mergeSort(arr,midIndex+1,endIndex);
        merge(arr,begIndex,midIndex,endIndex);
    }
}
let arrayOfNumbers = [5,7,8,4,1,6,2];

mergeSort(arrayOfNumbers,0, arrayOfNumbers.length-1);

console.log(arrayOfNumbers);





//quick sort
function rearrange(arr,startIndex,endIndex){
    let pivot = arr[endIndex];
    let i = (startIndex - 1);
    for(let j = startIndex; j<= endIndex - 1; j++){
        if(arr[j] < pivot){
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[i+1];
    arr[i+1] = arr[endIndex];
    arr[endIndex] = temp;
    return i+1;
}

function quickSort(arr,startIndex,endIndex){
    if(startIndex < endIndex){
        let pivotIndex = rearrange(arr,startIndex,endIndex);
        quickSort(arr,startIndex,pivotIndex - 1);
        quickSort(arr,pivotIndex + 1, endIndex);

    }
}

let arrayO = [5,7,8,4,1,6,2];

quickSort(arrayO,0, arrayO.length-1);

console.log(arrayO);





//linked list
class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}
class linkedlist{
    constructor(){
        this.head=null;
    }
    insertbig(value){
        let newnode=new Node(value);
        if(this.head==null){
            this.head=newnode;
        }else{
            newnode.next=this.head;
            this.head=newnode;
        }
    }

    insertMid(value,ind){
        let newnode=new Node(value);
        if(this.head==null){
            this.head=newnode;
        }else{
            let i=1;
            let last=this.head;
            while(last!=null){
                if(i+1===ind){
                    let temp=last.next;
                    last.next=newnode;
                    newnode.next=temp;
                }
                last=last.next;
            }
        }
    }

    insertend(value){
        let newnode=new Node(value);
        if(this.head==null){
            this.head=newnode;
        }else{
        let last=this.head;
        while(last.next!=null){
            last=last.next;
        }
        last.next=newnode;
        }
    }

    deleteBeg(){
        if(this.head == null){
            console.log("list is empty");
        }else{
            this.head = this.head.next;
        }
    }

    deleteEnd(){
        if(this.head==null){
            console.log("list is empty");
        }else{
            let last=this.head;
            while(last.next.next!=null){
                last=last.next;
            }
            last.next=null;
        }
    }

    printElements(){
        if(this.head == null){
            console.log("List is empty");
        }else{
            let temp = this.head;

            while(temp != null){
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
}
let ll=new linkedlist();
ll.insertend(10);
ll.insertend(20);
ll.insertend(30);
ll.insertMid(2,2);
ll.printElements();




//recursion

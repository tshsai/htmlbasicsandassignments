// In a computer system, N values are stored in the memory.
//  A programmer needs to find out the largest and smallest value present 
//  in the memory. But the condition is, only one scan is allowed, 
//  multiple scans/passes are not allowed. Write a program to find the largest 
//  and smallest number from the given list of numbers in single pass.

const arr=[1,4,5,6,2,3,10];
let max=arr[0];
let min=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log("Maximum element is ",max);
console.log("Minimum element is ",min);
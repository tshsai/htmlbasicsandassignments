// A computer programmer stored the password to his account in an array. 
// To keep this password safe he then rotated the array in 
// anticlockwise direction N times. Now he wants to know his password. 
// Write a code that takes following output:

// ·        N, number of elements

// ·        Elements of the array

// ·        R, number of rotations

// Print the values after rotating the array R number of times.

let number_of_elements=5
const arr=[1,2,3,4,5];
let number_of_rotations=17

let rem=number_of_rotations%number_of_elements;
if(rem==0){
    for(let i=rem;i<arr.length;i++){
        console.log(arr[i])
    }
}
else{
    for(let i=rem;i<arr.length;i++){
        console.log(arr[i])
    }
    for(let i=0;i<arr.length-2;i++){
        console.log(arr[i]);
    }
}

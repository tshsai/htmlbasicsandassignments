/*
1)Y2K problem: Databases written in 1970's used 2-digit fields to represent the year 
e.g., 77, 80 instead of 1977, 1980.
However with the year 2000 nearby all these fields had to be changed to be 4-digit date. 
Write a program to change a given 2-digit year to a 4-digit year. 
Remember that if the 2-digit number is less than 35 it means it’s a year in the 2000-year range. E.g., 15 would mean 2015 not 1915. */

let p1=(pro1)=>{if (pro1<35){ return 2000+pro1;}else{return 1900+pro1;}}
let problem1=p1(90);
console.log(problem1);







/*
Q2. In a board game, a piece may advance 1-6 tiles forward depending on the number r
olled on a six-sided dice. If you advance your piece onto the same tile as another 
player's piece, both of you earn a bonus.
Examples
'1
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false*/
let possibleBonus=(a,b)=>{
    if(a>b || b-a>6){
        return false;
    }else{
        return true;
    }
};
let problem2=possibleBonus(1,9);
console.log(problem2);




/*Q3.  Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

Example: -arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

Notes: -Notice that num is also included in the returned array. */
let arrayOfMultiples=(a,b)=>{
    let pro=[];
    for(let i=1;i<=b;i++){
        pro.push(a*i);
    }
    return pro;
};
let problem3=arrayOfMultiples(12,10);
console.log(problem3);





/*Q4. Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
Input:
N = 7
a[] = {2,6,1,9,4,5,3}
Output:
6
Explanation:The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.*/
const pro4=[2,6,1,9,4,5,3];
pro4.sort();
let conse=(pro4)=>{
    let c=0;
    const p4=[];
    for(let i=0;i<(pro4.length)-1;i++){
        if(pro4[i]+1==pro4[i+1]){
            c+=1;
        }else{
            p4.push(c);
            c=0;
        }
    }
    return Math.max(p4)+1;
};
let problem4=conse(pro4);
console.log(problem4);







/*5)Q4. Given an array, write a function to calculate its depth. Assume that a normal array has a depth of 1.
Examples
depth ([1, 2, 3, 4]) ➞ 1
depth ([1, [2, [3, 4]]]) ➞ 3*/
const p5=[1,[2,[3,4]]];//3
let testRy = [1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]//4
let problem5=(a)=>{
    if(Array.isArray(a)){
        return (1+Math.max(0,...a.map(problem5)));
    }
    else{
        return 0;
    }
}
console.log(problem5(testRy))











/*Q6. Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.
Examples: -
nearestVowel("b") ➞ "a"
nearestVowel("s") ➞ "u"
nearestVowel("i") ➞ "i"*/
let nearestVowel=(a)=>{
let vowel=[97,101,105,111,117];
let temp=a.charCodeAt(0);
let arr=[];
for(let i=0;i<vowel.length;i++){
    arr.push((vowel[i]-temp)<0?(vowel[i]-temp)*(-1):(vowel[i]-temp));
}
let min_i=0;
let min_d=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]<min_d){
        min_d=arr[i];
        min_i=i;
    }
}
return String.fromCharCode(vowel[min_i]);
};
let problem6=nearestVowel("i");
console.log(problem6);


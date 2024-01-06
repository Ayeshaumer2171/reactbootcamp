// data types

// 1.Reverse an Integer: Write a function that takes an integer as input
//  and returns the reverse of the integer.
//  For example, if the input is 12345, the output should be 54321.

// function reverseStr(n) {
//     const reversedStr = n.toString().split('').reverse().join('');
//     return parseInt(reversedStr); 
//   }

// function reverseStr(n){
//     return (parseFloat(n.toString().split('').reverse('').join(''))*Math.sign(n))
// }
  
//   let nr = 54321.9;
//   console.log(reverseStr(nr));


// 2.Find the Missing Number: Given an array containing numbers from 1 to n,
//  with one number missing, write a function to find the missing number. 
//  For example, if the array is [1, 2, 4, 5], the function should return 3.

// function missingNum(arr){
//     const n=arr.length+1;
// const expectedSum=(n*(n+1))/2;
// const actualSum=arr.reduce((sum,num)=>sum+num);
// return expectedSum-actualSum;
// }
// let fbr=[1,2,4,5];
// console.log(missingNum(fbr));
  

// 3.Convert Roman Numerals: Write a function that converts a Roman numeral string to an integer.
//  For example, if the input is "IX", the output should be 9.

// function romanToInt(roman) {
//     const romanMap = {
//       'I': 1,
//       'V': 5,
//       'X': 10,
//       'L': 50,
//       'C': 100,
//       'D': 500,
//       'M': 1000
//     };
//     let result = 0;
//     let prevValue = 0; 
//     for (let i = roman.length - 1; i >= 0; i--) {
//       const currentVal = romanMap[roman[i]];
//       if (currentVal >= prevValue) {
//         result += currentVal;
//       } else {
//         result -= currentVal;
//       }
//       prevValue = currentVal;
//     }
  
//     return result;
//   }
//   console.log(romanToInt('IX')); // Output: 9
//   console.log(romanToInt('LVIII')); // Output: 58
//   console.log(romanToInt('MCMXCIV')); // Output: 1994


// 4.Check Anagram: Given two strings, write a function to determine 
// if they are anagrams (contain the same characters in a different order).
//  For example, if the input is "listen" and "silent," the function should return true.


// function isAnagram(str1,str2){

//     const strString1=str1.replace(/[^A-Za-z]/g, '').toLowerCase();;
//     const strString2=str2.replace(/[^A-Za-z]/g, '').toLowerCase();;

//     const clean1=str1.split('').sort().join('');
//     const clean2=str2.split('').sort().join('');

// if(clean1===clean2){
//     return true;
// }

// return 0;
// }

//   console.log(isAnagram('listen','silent'));
//   console.log(isAnagram('listen','wordpress'));


//5.Largest Number: Given an array of integers, write a function to find the largest number.
//For example, if the array is [3, 9, 2, 5], the function should return 9.

// function findLargestNumber(arr) {
//     if (arr.length === 0) {
//       return null;
//     }  
//     let largestNumber = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largestNumber) {
//         largestNumber = arr[i]; 
//       }
//     }
//     return largestNumber;
//   }
 
//   console.log(findLargestNumber([3, 9, 2, 5])); // Output: 9
//   console.log(findLargestNumber([-1, -5, -2, -9])); // Output: -1
//   console.log(findLargestNumber([])); // Output: null


// 6.Remove Duplicates: Given an array of numbers, write a function to remove duplicates
//  and return a new array with unique elements. For example,
//   if the array is [1, 2, 2, 3, 4, 4], the function should return [1, 2, 3, 4].

// function removeDuplicates(arr){

// let uniqueArray =[];
// for(let i=0;i<arr.length;i++)
// if(!uniqueArray.includes(arr[i])){
//     uniqueArray.push(arr[i]);
// }
// return uniqueArray;
// }

// console.log(removeDuplicates([2,2,3,5,6,7,7]))


// 7.Fibonacci Sequence: Write a function that generates the Fibonacci sequence up to a given number n.
//  The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.

// function generateFibonacci(n){

//     let fibonacciSeq=[0,1];
//     while (fibonacciSeq[fibonacciSeq.length-1]+ fibonacciSeq[fibonacciSeq.length - 2]<= n) {
//         const nextFibonacciSeq=fibonacciSeq[fibonacciSeq.length-1]+ fibonacciSeq[fibonacciSeq.length - 2]<= n
//         fibonacciSeq.push(nextFibonacciSeq)
//     }
//     return fibonacciSeq;

// }
// console.log(generateFibonacci(50)); 


// 8.Count Characters: Given a string, write a function to count the occurrences of each character and return the result as an object. For example, if the input is "hello," the function should return { h: 1, e: 1, l: 2, o: 1 }.

// function countCharacters(str,letter){
//     let count=0;
//     for (let i=0;i<str.length;i++){
//         if(str.charAt(i)==letter){
//             count=count+1;
//         }
//     }
//     return count
// }
// console.log(countCharacters("hello"));

// 9.Longest Substring: Given a string, write a function to find the length of the longest substring without repeating characters. For example, if the input is "abcabcbb," the function should return 3 (for "abc").


//10.Sum of Array: Write a function that takes an array of numbers as input and returns the sum of all the numbers.


// function sumArray(numbers){
//     let array=0;
//     for(let i=0;i<numbers.length;i++){
//         array=array+arr[i];
//     }
//      return array;
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers));


//11.Count Occurrences: Write a function that takes an array of strings as input and returns an object containing the count of occurrences for each string.

// function countOcuurence(str){
// let charCount={};
// count=0;
// for(i=0;i<str.length;i++){
//    let char=str[i];
//    if(charCount[char]){
//     // charCount[char]++
//     // count++; just to check
//    }else{
//     charCount[char]=1;
//    }
// }
// return charCount;
// }

// console.log(countOcuurence('hello'));

// function findLargestNumber(arr) {
//         let largestNumber = []; 
//         for (let i = 0; i < arr.length; i++) {
//           if (arr[i] > largestNumber) {
//             largestNumber = arr[i]; 
//           }
//         }
//         return largestNumber;
//       }
     
//       console.log(findLargestNumber([1, 9, 25, 5])); // Output: 9
    

//12.Palindrome Check: Write a function that takes a string as input and returns true if it is a palindrome (reads the same forwards and backwards), or false otherwise.

// function palindromeStr(str){
// let char=str.split('').reverse().join('');
// if(char===str){
//     return true;
// }else{
//     return false;
// }
// }
// console.log(palindromeStr('racecar'));
// console.log(palindromeStr('baeutiful'));

//13.Remove Duplicates: Write a function that takes an array of strings as input and returns a new array with the duplicate strings removed.

// function removeDuplicates(arr) {
    // return [...Set(arr)]
    // const uniqueArr = [];
  
    // for (let i = 0; i < arr.length; i++) {
    //   const str = arr[i];
    //   if (!uniqueArr.includes(str)) {
    //     uniqueArr.push(str);
    //   }
    // }
  
    // return uniqueArr;
  // }
  
  // console.log(removeDuplicates(['apple', 'banana', 'cherry', 'apple', 'banana'])); 
  // console.log(removeDuplicates(['a', 'b', 'c', 'a', 'b', 'c'])); 
  // console.log(removeDuplicates([])); 
  

  // 14.Check Subset: Write a function that takes two arrays as input and returns true if the first array is a subset of the second array, or false otherwise.

//   function subset(arr1, arr2) {
   
// // let set= new Set(arr2);//demo
// for(i=0;i<arr1.length;i++){
//   if(new Set(arr2).has(arr1[i])){
//     return true
//   }
// }
// return false;
//   }
  
//   console.log(subset(['a', 'b', 'c'], ['b', 'c'])); // Output: true
  

//15.Unique Characters: Write a function that takes a string as input and returns true if all the characters in the string are unique (no repeated characters), or false otherwise.

// function uniqueChar(arr){
// let uniqe=new Set(arr)
// for(i=0;i<arr.length;i++){
// if(!uniqe.has(arr[i])){
//   return false;
// }
// }
// return uniqe;
// }
// console.log(uniqueChar("hellooh"))


//16.Check Equality: Write a function that takes two arrays as input and returns true if they are equal (contain the same elements in the same order), or false otherwise.

// function checkingSame(arr1,arr2){
// for(i=0;i<arr1.length;i++){
//   for(j=0;i<arr2.length;j++){
//     if(arr1[i]===arr2[j]){
//       return true;
//     }else{
//       return false;
//     }
//   }
// return 0;}
// }
// console.log(checkingSame([1,2,3,4,5],[1,2,3,4,5]))
// console.log(checkingSame([1,2,3,4,5],[,2,3,4,]))


//17.Find Intersection: Write a function that takes two arrays as input and returns a new array containing the common elements found in both arrays.
// function commonElements(arr1, arr2) {
//   let common = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         common.push(arr1[i]);
//       }
//     }
//   }

//   return common;
// }

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [3, 4, 7, 8, 9];
// console.log(commonElements(array1, array2)); // Output: [3, 4]

// function removeDuplicates(arr){

  // let uniqueArray =[];
  // for(let i=0;i<arr.length;i++)
  // if(!uniqueArray.includes(arr[i])){
  //     uniqueArray.push(arr[i]);
  // }
  // return uniqueArray;
  // }
  
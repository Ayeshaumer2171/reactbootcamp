
//Problem: Given an array of words, count the number of vowels in each word and print the result for each word using forEach().
//   function vovels(arr){
//     const regex = /[aeiou]/ig;
//     arr.forEach(element => {
//    let mine=  element.match( regex).length;
//    console.log(`${element} ${mine} vovel words`)
//     });
//   }
//   vovels(['yesh','aliza','umer'])

//Problem: Given an array of shopping items with price and quantity properties, calculate the total cost (price * quantity) for each item and print the result using forEach().
// const totalCost=(arr)=>{
// arr.forEach(element => {
//     console.log(element.price*element.quantity);
// });
// }
// let shopping=[
//     {price:500,quantity:2},
//     {price:900,quantity:5},
//     {price:200,quantity:7},
//     {price:300,quantity:8}
// ]
// totalCost(shopping);


//Problem: Given an array of numbers, find the square of each number and print the result using forEach().

// const square=(arr)=>{
// arr.forEach(element => {
//     console.log(element**2)
// });
// }
// square([2,4,5,6,7]);

// //Problem: Given an array of dates, print the day, month, and year separately for each date using forEach().
// function datesAndMonths(arr){
// arr.forEach(element => {
//     let dateObj=new Date(element);
//     let days=dateObj.getDay();
//     let months=dateObj.getMonth();
//     let year=dateObj.getFullYear();
//     console.log(`date:${element},day:${days},months:${months},years:${year}`)
// });
// }
// datesAndMonths(['2023-08-03', '2023-12-25', '2023-05-15'])


//Problem: Given an array of sentences, count the number of words in each sentence and print the count for each sentence using forEach().

// function checking(arr){

// arr.forEach(element => {
//     console.log(element.split(' ').length)
// });
// }

// const sentencesArray = [
//     "Hello, how are you?",
//     "I love coding in JavaScript.",
//     "This is a sample sentence.",
//     "JavaScript is awesome!"
//   ];

// checking(sentencesArray);

//Problem: Given an array of names, create a new array containing the length of each name using forEach().

// function newArray(names) {
//     let result = [];
//     names.forEach((element) => {
//       let sum = element.length;
//       result.push(sum);
//     });
//     console.log(result);
//   }
  
//   newArray(['ayesha', 'aliza', 'umer', 'mine']);


//Problem: Given an array of items, check if a specific item exists in the array using forEach() and print a message if it is found.

// function sum(arr,itemToFind){
//     let found=false;
// arr.forEach( (element)=> {
//     if(element===itemToFind){
//         found=true;
//     }
// });

// if(found){
//     console.log(`"${itemToFind}" exists in the array.`);
// }else{
//     console.log(`"${itemToFind}"  does not exists in the array.`);
// }
// }
  
// const itemsArray = ["apple", "banana", "orange", "grape"];
// sum(itemsArray, "orange");
// sum(itemsArray, "pear");
//premitives
//1.Write a function that takes two arguments and returns the concatenation of the two strings. If the arguments are not strings, it should return null.
// function concatStr(a,b){
// if( typeof a=="string" && typeof b=="string"){
// return a+b;
// }else{
//     return null;
// }
// }
// console.log(concatStr('abc','def'));
// console.log(concatStr(1,3));


//2.b) Create a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
// function sum(arr){
//     let count=0;
// for(i=0;i<arr.length;i++){
// count+=arr[i]
// }
// return count;
// }
// console.log(sum([1,1,1,1,1]))//5

//Conditions
//1.a) Write a function that takes a number as input and returns "positive" if it's positive, "negative" if it's negative, and "zero" if it's zero.
// function trly(num){
// if(num>0){
//     return 'positive';
// }else if (num<0){
// return 'negative';
// }else if(num===0){
// return 0;
// }else{
//     return 'empty';
// }
// }
// console.log(trly(4))
// console.log(trly(-4))
// console.log(trly(0))
// console.log(trly())

//2.b) Create a function that takes an object representing a person with properties "age" and "isEmployed." The function should return "eligible" if the person is above 18 years old and employed, "partially eligible" if the person is either above 18 or employed, and "not eligible" if both conditions are not met.

// function maybe(obj){

//     const age=obj.age;
//     const isEmployed=obj.isEmployed;

// if(age<18 && isEmployed==='employed')
// {
//     return 'eligible';
// }
// else if( age<18||isEmployed==='employed')
// {
//     return ' partially eligible';  
// }
// else {
//     return 'not eligible';
// }
// }
// console.log(maybe({ age: 22, isEmployed: true }));    // Output: 'eligible'
// console.log(maybe({ age: 25, isEmployed: false }));   // Output: 'partially eligible'
// console.log(maybe({ age: 17, isEmployed: true }));    // Output: 'partially eligible'
// console.log(maybe({ age: 16, isEmployed: false }));   // Output: 'not eligible'
// console.log(maybe({ age: 30, isEmployed: true }));    // Output: 'eligible'
// console.log(maybe({ age: 18, isEmployed: false }));   

//collections
// function evenAddition(arr){
// let count=[];
// for(i=0;i<arr.length;i++){
// let add=arr[i];
// if(add%2===0){
//     count.push(add);
// }
// }
// return count;
// }

// console.log(evenAddition([1,2,3,4]))

//b) Create a function that takes an array of strings and returns the number of times the letter "a" appears in all the strings combined.

//  function occurence(str){

// let count=0;
// str.forEach((str) => {
//     const sum=(str.match(/a/gi)).length;
//     count+=sum;
// });
// return count;
// }

// console.log(occurence(['ayesha','laibaaa']))

// function getTopScorers(students) {
//     const topScorers = students.filter(student => student.score > 80);
//     const sortedNames = topScorers.map(student => student.name).sort();
//     return sortedNames;
//   } 
//   // Test case
//   const students = [
//     { name: 'Alice', score: 75 },
//     { name: 'Bob', score: 90 },
//     { name: 'Charlie', score: 82 },
//     { name: 'David', score: 78 },
//     { name: 'Eva', score: 88 },
//   ];
//   console.log(getTopScorers(students));
//   // Output: [ 'Charlie', 'Eva', 'Bob' ]


// function arrayss(arr){
// let count=0;
// for(let i=0;i<arr.length;i++){
//     let sum=arr[i];
//     if(sum.length>=5){
//          count++;
//     }
// }
// return count;
// }
//   console.log(arrayss(['ayesha','abc','chekoslovakia','member','ab']))

//a.Create a function that takes an array of numbers and returns the sum of all the positive numbers in the array.

// function positiveNumber(num){
//     let count=0;
//     for(i=0;i<num.length;i++){
//         if(num[i]>0)
//         count+=num[i]
//     }
//     return count;
// }
// console.log(positiveNumber([-1,1,1,1,-5]))

//b.Write a function that takes an array of objects representing books,
//  with each object having "title" (string) and "author" (string) properties.
//  The function should return an array of book titles written by a specific author.

// function arraying(booksArray,authorName){
// const booksByAuthor=booksArray.filter(books=>books.author==authorName)
// const booksByTitle=booksByAuthor.map(books=>books.title)
// return booksByTitle;
// }
// const books=[
//     {title:'forbidden love',author:'ayesha'},
//     {title:'fariha',author:'aliza'},
//     {title:'kuzay gunay',author:'fatima'},
//     {title:'nihal',author:'aiza'},
//     {title:'bihter',author:'ayesha'},
// ]
// console.log(arraying(books, 'ayesha'))

//c.Create a function that takes an array of strings and returns a new array containing only the strings that start with the letter "A".

// function astring(str){
// let result=[];
//     for(let i=0;i<str.length;i++){
// let sum=str[i];
// if(sum[0]===sum[0].toUpperCase()) {
//     result.push(sum);
// }
//     }
// return result;
// }
// console.log(astring(['Ayesha','umer','Aliza','aiza']))

//d.Write a function that takes an array of objects representing employees, with each object having "name" (string) and "department" (string) properties. The function should return an object that contains department names as keys and the number of employees in each department as values.

// function departmentFeatures(employeesArray){
// let departmentCounts={};

//  employeesArray.forEach(employees => {
//     const department=employees.department;
//     if(departmentCounts.hasOwnProperty(department)){
//         departmentCounts[department]++
//     }else{
//         departmentCounts[department]=1;
//     }

// });
// return departmentCounts;

// }
//  let employees=[
//     {name:'ayesha',department:'IT'},
//     {name:'aliza',department:'CS'},
//     {name:'ayezah',department:'IT'},
//     {name:'arisha',department:'CS'},
//     {name:'Ayan',department:'ELECTRICAL'}
// ]
// console.log(departmentFeatures(employees));




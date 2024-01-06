// let array=[10,20,70,80,90];
// let ans=array.filter(x=>x<60);
// console.log(ans);

//Problem: Given an array of numbers, filter out all the even numbers and create a new array with only the odd numbers.
//  let array=[10,45,70,80,9];
//  let ans=array.filter((x)=>{ return x%2!==0});
//  console.log(ans);

//Problem: Given an array of strings, filter out all the words with more than five characters and create a new array with only the short words.
// let array=['ayesha','aiza','abc','kanwal','muqadas','aleeza','laba']
// let ans=array.filter((x)=>{
//   return  x.length<5;
// })
// console.log(ans);


//Problem: Given an array of objects representing students with name and score properties, filter out all the students who scored less than 60 and create a new array with only the passing students.
// let students=[
//         {name:'ayesha',score:500},
//         {name:'aliza',score:900},
//         {name:'umer',score:20},
//         {name:'ayezah',score:30}
//     ]
// let ans=students.filter(x=>x.score>60);

// console.log(ans);


//Problem: Given an array of products with price and quantity properties, filter out all the products with a quantity of zero and create a new array with only the available products.
// let products=[
//         {price:500,quantity:2},
//         {price:900,quantity:5},
//         {price:200,quantity:7},
//         {price:300,quantity:0}
//     ]
//     let ans=products.filter((x)=>{
//         return x.quantity!==0;
//     })
//     console.log(ans);


//Problem: Given an array of strings, filter out all the words that start with the letter 'a' and create a new array with only the remaining words.
// let strings=['Ayesha','maham','saira','aizxa']
// let ans=strings.filter((x)=>{
//     return !x.toLowerCase().startsWith('a');
// })
// console.log(ans)


//Problem: Given an array of numbers, filter out all the negative numbers and create a new array with only the positive numbers.
// let num=[1,2,3,-4,-5]
// let ans=num.filter((x)=>{
// return x<0;
// })
// console.log(ans);

 //Problem: Given an array of objects representing books with title and author properties, filter out all the books written by a specific author and create a new array with only the books by that author.
// let books=[
//     {title:'forbidden love',author:'ayesh'},
//     {title:'mn marjawan',author:'aliza'},
//     {title:'gulefaitma',author:'fatime'},
//     {title:'kuzay gunay',author:'laraib'},
// ]
// let authorToFilter = 'orange';

// let ans=books.filter((x)=>{
//   return x.author===authorToFilter;
// })
// console.log(ans);


//Problem: Given an array of email addresses, filter out all the invalid email addresses (not following a valid email format) and create a new array with only the valid email addresses.
// let emailAddresses = [
//     'john.doe@example.com',
//     'jane.doe@example', // Invalid format
//     'hello@world', // Invalid format
//     'user@example.com',
//   ];

//   let validation=emailAddresses.filter((x)=>{
//     let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(x);
//   })
//   console.log(validation);


//Problem: Given an array of names, filter out all the names that are duplicates and create a new array with only unique names.
// let names=['ayesha','aliza','ayesha','maham','soniya','soniya','achd']

// let ans=names.filter((name,index)=>{
// return names.indexOf(name)===index;
// })
// console.log(ans)


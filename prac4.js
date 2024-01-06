//   let array=[20,30,40,50];
//  let ans=array.map(x=>{
//   return  x*2;
//  } );
//    console.log(ans);

// let array=[10,20,30,40,50];
// let ans=array.map(x=>{
// if(x<25){
// return x
// }
// });
// console.log(ans);

//problems
//Problem: Given an array of numbers, double each number and create a new array with the doubled values using map().
// let nums=[2,3,4,5,6];
// let ans=nums.map(x=>x*2);
// console.log(ans)


//Problem: Given an array of strings, convert each string to uppercase and create a new array with the uppercase strings using map().
// let names=['ayesha','zliza','syezah','fatime'];
// let ans=names.map((x)=>{
//   return  x.charAt(0).toUpperCase()+x.slice(1)
// }
// );
// console.log(ans)


//Problem: Given an array of objects representing students with name and score properties, increase the score of each student by 10% and create a new array with the updated scores using map().
// let students=[
//         {name:'ayesha',score:90},
//         {name:'laiba',score:80},
//         {name:'ayesha',score:70},
//         {name:'laiba',score:70},
//         {name:'ayesha',score:60},
//         {name:'laiba',score:50},
//         {name:'laiba',score:40}
//     ]

//     let ans=students.map((x)=>{
// // return {name:x.name,score:x.score}
// return  Math.floor( x.score*1.1);
// }
//  )
//     console.log(ans)


//Problem: Given an array of temperatures in Celsius, convert each temperature to Fahrenheit and create a new array with the Fahrenheit temperatures using map().

// let temperature=[0, 15, 25, 10, -5, 30];
// let ans=temperature.map((x)=>{
// return (x*1.8)+32;
// })
// console.log(ans);


//Problem: Given an array of numbers, calculate the square root of each number and create a new array with the square roots using map().
//  let numbers=[2, 15, 25, 10, 5, 30];
//  let ans=numbers.map((x)=>{
//     return Math.floor(Math.sqrt(x));
//  })
//  console.log(ans)

//Problem: Given an array of objects representing books with title and author properties, extract only the titles of the books and create a new array with the titles using map().
// let books=[
//         {title:'forbidden love',author:'ayesh'},
//         {title:'mn marjawan',author:'aliza'},
//         {title:'gulefaitma',author:'fatime'},
//         {title:'kuzay gunay',author:'laraib'},
//     ]
//     let ans=books.map((x)=>{
//         return x.title;
//     })
//     console.log(ans);

//Problem: Given an array of strings, reverse each string and create a new array with the reversed strings using map().
// let names=['ayesha','zliza','syezah','fatime'];
// let ans=names.map((x)=>{
// return x.split('').reverse().join('')
// })
// console.log(ans)

//Problem: Given an array of strings, remove any leading or trailing spaces from each string and create a new array with the trimmed strings using map().
// let names=["   hello", "world   ", "   welcome   ", " to   ", "  JavaScript   "];
// let ans=names.map((x)=>{
//     return x.trim('');
//     })
//     console.log(ans)

//Problem: Given an array of numbers, round each number to the nearest integer and create a new array with the rounded numbers using map().
// let numbers=[1.4, 2.7, 3.2, 4.8, 5.1];
// let ans=numbers.map((x)=>{
// return Math.round(x);
// })
// console.log(ans);




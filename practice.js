// let x=(x=>x+20);
// let ans=x(3);
// console.log(ans)
// console.log(x(2,3));

// const fact=(num)=>{
//     var fact=1;
//     for(var i=1;i<=num;i++){
//     fact = fact*i;

//     return fact;
//     }
//     console.log(fact);
// }
// fact(8);


//fabicconi sequence

//   const fabbi=(num)=>{
         
//     let a=0;
//     let b=1
    
// for(var i=0;i<=13;i++){
// var temp=a+b;
// a=b;
// b=temp;

// console.log(temp)
// }
//  }
// fabbi();

//    function prime(num){
//      if(num<1){
// console.log('not a prime number ')  
//    }else {
//    for(i=2;i<num;i++){
//   if (num % i === 0) {
//     return false;
//   }
//    }
//      }
//      return true;

//     }
     
//     console.log(prime(4)); 
    


// const sum=(arr)=>{
// let sum=0;
// for(var i=0;i<arr.length;i++){
//   sum+=arr[i];
// }
// return sum;
// }
// console.log(sum([1,2,3,4]));



//   const func=(obj,val)=>{
//    for(const key in obj){
//   if(obj[key]==val){
//    return key;
//   }
//   }
//   return null;
//   }

// let objs={
//   id:210,
//   title:'ayesha',
//   company:'IT'
// }
// console.log(func(objs, 'IT')); 

// function sum(a,b){
//  return a**b;
// }
// console.log(sum(5, 0));

//Problem: Given an array of strings, convert all the strings to uppercase using forEach().
// let str=['ayesha','umer','aliza','ayezah'];
// str.forEach(x=>{
//    console.log( x.charAt(0).toUpperCase()+x.slice(1));
// })

//Problem: Given an array of objects representing students with name and score properties, print the name and whether each student passed (score >= 60) or failed (score < 60) using forEach().
// function sum(stu){
// stu.forEach((element) => {
//     if(element.score >= 60){
//         console.log(`${element.name}, congrats, you are passed.`);
//     }else {
//         console.log(`${element.name}, sorry, you are fail.`);

//     }
// });

// }

// let students=[
//     {name:'ayesha',score:90},
//     {name:'laiba',score:80},
//     {name:'ayesha',score:70},
//     {name:'laiba',score:70},
//     {name:'ayesha',score:60},
//     {name:'laiba',score:50},
//     {name:'laiba',score:40}
// ]
// sum(students);




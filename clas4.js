//function arrays,loops,
//ES6 arrow,forEach,map,filter

// function sum(x,y){
//     let ans=x+y;
//      console.log(ans);
//     return ans;
// }
// let y=sum(2,3);
// if(y!==undefined)
//  console.log(y);

//  const f=((x,y)=>x+y)(2,3);
// console.log(f);

// console.log(((x,y)=>x+y)(2,3));

// let ans=((x,y)=>x+y)(2,3);
// console.log(  ans);
// if(typeof  ans==='function')
//  console.log(ans(30,40));//not a function

// let ans=(x=>x+20);
// console.log(ans(3));


// let f=()=>[2,3,4];
// let ans=f();
// console.log(ans);

// 

// let sum=(x,y)=> { return x+y} ;
// console.log(sum(3,4));//7

// let sum=(x,y)=> {if( x>y) return x;else  return y };

//  console.log(sum(3,4));

// let products={id:1,title:'ayesha'};
// let f=()=>{ return products};
// console.log(f());

//  let f=()=>({id:1,title:'ayesha'});
//   console.log(f());


// let array=[20,30,40,50];
// for(var i=0;i<array.length;i++)
// console.log(array[i]**2)


// let array=[20,30,40,50];
// array.forEach(x=>console.log(x*3));

// let array=[20,30,40,50];
// function sum(x){
// console.log(x*2);
// }
// array.forEach(sum);

// let array=[20,30,40,50];
//  let ans=array.forEach(x=>x*0.01);
//  console.log(ans);


// let array=[20,30,40,50];
//  let ans=array.map(x=>{
// console.log(x);
//  return x*2;
//  } );
//    console.log(ans);return them


// let array=[20,30,40,50];
//  let ans=array.forEach(x=>{
// console.log(x);
//  return x*2;
//  } );
//    console.log(ans);//not return

// let array=[10,20,30];
// let ans=array.map(x=>console.log(x));
// console.log(ans)


// let array=[10,20,30,40,50];
// let ans=array.map(x=>{
// if(x<25){
//     return x+100;
// }
// });
// console.log(ans);//[ 110, 120, undefined, undefined, undefined ]

// let array=[10,20,30,40,50];
// let ans=array.map(x=>{
// if(x<25){
//     return x+100;
// }else{
//     return x;
// }
// });
// console.log(ans);


// let array=[10,20,30,40,50];
// let ans=array.map(x=>x<25?x+100:x);
// console.log(ans);


//filter and map is a pure function which cannot change original array
//filter method (it is used to reduce the size of array)

//filter method checks truth and false;

// let array=[10,20,30,40,50];//30,40,50,60,70
// let ans=array.filter(x=>x+20<60);
// console.log(ans);

// let array=[10,0,30,40,50,-1];//30,40,50,60,70
// let ans=array.filter(x=>{
//   return  x=x+5;
// // return x;
// });
// console.log(ans);

// let array=['ayesha','umer','aliza','ayezah'];
// array.forEach(x=>console.log(`${x} hii my name is ayesha`) );


//Problem: Given an array of numbers, find the sum of all the elements using forEach().
// function sum(arr){
//     let sums=0;
// arr.forEach(arrs=>{
//     sums+=arrs;
// }
//     );
//     console.log(sums);
// }
// sum([1,2,3,4,5]);


//premitives  numbers, strings,boolean(value type)
//collectives   arrays, objects,functions (memory reference )type

//copy....(deep copy)
//number
//   let x=10;
//   let y=x;
//       y=2;
//   console.log(x,y)

//string
// let a='abc';
// let b=a;
// b='def'
// console.log(a,b);

//boolean
// let x=false;
// let y=x
// y=true;
// console.log(x,y)

//ref type arrays
//shalllow copy(only memory refernece share)
// let x=[2,3,4];
// let y=x;
// x[1]=4
// console.log(x,y);//[ 2, 4, 4 ] [ 2, 4, 4 ]

//deep copy
// let x=[2,3,4];
// let y=[x[0],x[1],x[2]];
//  x[1]=4
// console.log(x,y);

////deep copy(ES6)
// let x=[2,3,4];
// let y=[];
// for(i=0;i<x.length;i++){
//     y[i]=x[i]
// }
//   y[3]=5
// console.log(x,y);

//deep copy by spread opeartors(copy operators)
// let x=[2,3,4];
// let y=[...x];
//   y[3]=5
// console.log(x,y);


//objects
// let product={
//     id:1,
//     title:'abc',
//     price:400
// }
// console.log(product['id']);

// product.price='ayesha';
//  let copyproduct={...product};
//  copyproduct.price=3;
// console.log(product);
// console.log(copyproduct);



// let product={
//         id:1,
//         title:'abc',
//         price:400
//     }
//OR
// let product=[1,'abc',400]
//     let index=1;
// console.log(product[index])


//functions

// function increment(product){
//      product.price+=1000;
//     //  return product;
// }
// let product={
//             id:1,
//             title:'abc',
//             price:400
//         }
// increment(product);
// console.log(product);//call by reference

// function increment(x){
//     x.id+=1000;
// }
// let x=1000;
// increment(x);
// console.log(x);//call by value

// function increment(product){
//      console.log(  product.price+=1000);
//     }
//     let product={
//                 id:1,
//                 title:'abc',
//                 price:400
//             }
//     increment({...product});
//     console.log(product);//call by reference


//   function increment({...product}){
//    product.price+=1000;
//    console.log(product);
//    }
//    let product={
//                id:1,
//                title:'abc',
//                price:400
//            }
//    increment(product);
//    console.log(product);


//   function increment(...product){
//     product.price+=1000;
//     // console.log(product);
//     }
//     let product={
//                 id:1,
//                 title:'abc',
//                 price:400
//             }
//     increment(product);
//     console.log(product);


// function sum(...arr){
//     console.log(arr)
// }
// sum(2,3,4,5,6)

// let product={
//                    id:1,
//                    title:'abc',
//                    price:400
//                }
// let{id,...rest}=product;
// console.log(rest);
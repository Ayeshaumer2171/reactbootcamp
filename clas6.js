//ES6 spread operator...


//    let product = {
//         id: 1,
//         title: "Mobile Phone",
//         price: 50000,
//         avail: true,
//      };
//      let copyproduct={...product,id:5,quantity:700};//override while copying
//     //  copyproduct.id=5
//      console.log(product)
//      console.log(copyproduct)

//destructuring(extract)
// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 50000,
//     avail: true,
//  };

//  let {title,price}=product
//  price++
//  product.price--;
// console.log(title)
// console.log(price)
// console.log(product)

// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 50000,
//     avail: true,
//  };
// let {title:t,price}=product//rename while destructuring
// console.log(t)
//  console.log(price)

// let product = {
//         id: 1,
//         avail: true,
//      };

//      let {title:t="",price=9}=product//rename while destructuring
// console.log(t)
//  console.log(price)

// let product = {
//     id: 1,
//     title: "Mobile Phone",
//     price: 50000,
//     avail: true,
//  };
// let {title:t="",price=9}=product//rename while destructuring
// console.log(t)
//  console.log(price)//Mobile Phone ,50000


//rest operator... rest id not a keyword
// let product = {
//         id: 1,
//         title: "Mobile Phone",
//         price: 50000,
//         avail: true,
//         quantity:{
//             warehouse:'lahore',
//             cost:400,
//             //  units:5
//         }
//      };
//     //  let {quantity:{units}}=product
//     let {quantity,quantity:{units:u=90},...rest}=product
//      console.log(u)
//      console.log(rest)
//      console.log(quantity);



    //  let {id,price,...others}=product
    //  console.log(id)
    //  console.log(price)
    //  console.log(mine)1 ,50000,{ title: 'Mobile Phone', avail: true }

//return type destruc
//     function f(){
//         let product = {
//                     id: 1,
//                     title: "Mobile Phone",
//                     price: 50000,
//                     avail: true,
//                     quantity:{
//                         warehouse:'lahore',
//                         cost:400,
//                          units:5
//                     }
//                  };
//                  return product
//     }
//   let {id,price}=  f();
//     console.log(id)
//     console.log(price)


//principle of least priviledge
// function f({price,quantity:{units},...rest}){
//         console.log(price*1.10);
//   console.log(units)
//   console.log(rest)

// }

// let product = {
//                         id: 1,
//                         title: "Mobile Phone",
//                         price: 50000,
//                         avail: true,
//                         quantity:{
//                             warehouse:'lahore',
//                             cost:400,
//                              units:5
//                         }
//                      };

//    f(product);

//del a property
// let product = {
//         id: 1,
//         title: "Mobile Phone",
//         price: 50000,
//         avail: true,
//         quantity: {
//             warehouse: "lahore",
//             units: 5,
//             cost:900
//         }
//      };
// let{avail,...rest}=product;
// product=rest;
// console.log(rest);
    //   delete product.quantity.units;
    //  console.log(rest)

//     let array=[2,3,4];
//    //2,3 let [x ,y,]=array;//which position we have to skip we will just simply using (,) in that place
//   //4   let [,,y]
//    console.log(x,y)


// let array=[2,3,4,6,7,8];
// let [,x,...rest]=array
// console.log(x)
// console.log(rest)

// let array = [[10, 20], [30, 40]];
// let [,[,y]]=array;//40
// console.log(y)

// let array = [[10, 20],30, 40];
// let [,x,]=array;//30
// console.log(x)

// let array = [[10, 20], [30, 40]];
// let [[x,],]=array;//10
// console.log(x)



//1.b) Create a function that takes a string and returns the reverse of the string.
// function reversing(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     const average = sum / arr.length;
//     return average;
// }
// console.log(reversing([1,1,1,1]))

//2.b) Create a function that takes an array of strings and returns a new array with all the strings capitalized.

//  function capitalize(arr) {
//     return arr.map(str => str.toUpperCase());
//   }
  
//   console.log(capitalize(['ayesha', 'aliza', 'aiza']));

//3.a) Write a function that takes an object representing a person with "name" and "age" properties. The function should return a string containing their name and age.


// function representative(person){

// const age=person.age;
// const name=person.name;
// return `${age},${name}`

// }

// let persons={name:'ayesha',age:20}
// console.log(representative(persons))

//b) Create a function that takes an array of objects representing books, with each object having "title" (string) and "author" (string) properties. The function should return the book with the highest rating (you can add a "rating" property to the book objects).

// function findHighestRatingBook(books) {
  
//     const highestRatingBook = books.reduce((prevBook, currentBook) => {
//       return prevBook.rating > currentBook.rating ? prevBook : currentBook;
//     }); 
//     return highestRatingBook;
//   }
//   const books = [
//     { title: 'ishqemamnu', author: 'ayesha', rating: 90 },
//     { title: 'fariha', author: 'aleeza', rating: 80 },
//     { title: 'forbidden love', author: 'ayezah', rating: 70 }
//   ];
  
//   console.log(findHighestRatingBook(books));

//5.Write a function that takes an array of objects representing products, with each object having "name" (string), "price" (number), and "quantity" (number) properties. The function should return the total cost of all the products (price * quantity).

// function calculateTotalCost(products) {
//     const totalCost = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
//     return totalCost;
//   }
//   const products = [
//     { name: 'ayesha', price: 10, quantity: 2 },
//     { name: 'aleeza', price: 20, quantity: 3 },
//     { name: 'ayezah', price: 30, quantity: 1 },
//     { name: 'umer', price: 40, quantity: 2 }
//   ];
//   console.log(calculateTotalCost(products));
  // Output: 160 (10 * 2 + 20 * 3 + 30 * 1 + 40 * 2 = 160)
  

//  function calculateAverageScore(students) {
//   return students.map((student) => {
//     const { name, scores, age } = student;
//     const totalScore = scores.reduce((acc, score) => acc + score, 0);
//     const averageScore = totalScore / scores.length;
//     return { name, age, averageScore };
//   });
// }

// const students = [
//   { name: 'ayesha', scores: [10, 20, 30], age: 2 },
//   { name: 'aleeza', scores: [40, 20, 70], age: 3 },
//   { name: 'ayezah', scores: [10, 50, 30], age: 4 },
//   { name: 'umer', scores: [30, 60, 90], age: 2 }
// ];

// console.log(calculateAverageScore(students));



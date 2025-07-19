// // This is a simple IIFE (Immediately Invoked Function Expression)
// (function greet(name) {
//   console.log("Hello, " + name + "!");
//   // More code can be added here
//   // For example, we can log the value of s
//   console.log("The value of s is: " + s);
// })("world");

// function s() {
//   return "This is a simple function.";
// }

// //arrow function example
// const arrowGreet = (name) => {
//   console.log("Hello from arrow function, " + name + "!");
// };

// //function expression example
// const functionExpressionGreet = function (name) {
//   console.log("Hello from function expression, " + name + "!");
// };

// //anonymous function example
// const anonymousGreet = function (name) {
//   console.log("Hello from anonymous function, " + name + "!");
// };

// function s(n1 = 0, n2 = 200, n5, n3, n4) {
//   return n1 + n2 + n3 + n4 + n5;
// }

// console.log(s(3, 4));

// const arr = [1,2,3,4,4,56,6,6,7,8,8,8,75,75,7,6,76,7,5];

// function abc(n1) {
//   return n1;
// }
// console.log(abc(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21));

// rest operator
// let c = 10;
function restExample(s,w,r,...n1) {
  console.log("Arguments passed:", n1,s ,w,r);

}
console.log(restExample(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,c));

//loops
// while (c < 20) {
//   console.log("Current value of c:", c);
//   c++;
// }
for (let i = 0; i < 5; ) {
  console.log("Current value of i in for loop:", i);
i=i+100;
}

// do {
//   console.log("Current value of c in do-while loop:", c);
//   c++;
// } while (true);

// for (let i = 0; i < 5; i++) {
//   console.log("Current value of i in for loop:", i);
// }

// if (a > 10) {
//   console.log("a is greater than 10");
// } else {
//   console.log("a is not greater than 10");
// }

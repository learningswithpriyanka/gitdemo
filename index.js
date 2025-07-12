// This is a simple IIFE (Immediately Invoked Function Expression)
(function greet (name){
  console.log("Hello, " + name + "!");
  // More code can be added here
  // For example, we can log the value of s
  console.log("The value of s is: " + s);
})("world");

function s() {
  return "This is a simple function.";
}

//arrow function example
const arrowGreet = (name) => {
  console.log("Hello from arrow function, " + name + "!");
}

//function expression example
const functionExpressionGreet = function(name) {
  console.log("Hello from function expression, " + name + "!");
};

//anonymous function example
const anonymousGreet = function(name) {
  console.log("Hello from anonymous function, " + name + "!");
};



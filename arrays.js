// let num = new Number(10);
// console.log(typeof num); // Output: number

// //arrays
// const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5,2,3,5,5,6,67,7,8,8,9,9,9,0,0,0,0,0,0,0,0];
// console.log(fruits[1]); // Output: banana
// console.log( typeof fruits); // Output: object
// console.log( fruits instanceof Array); // Output: true

// console.log(num instanceof Number); 

// console.log(typeof function(){})

// console.log(typeof null )

// console.log([] instanceof Array); // Output: true

// const numbers=[];
// numbers[0] = 1;
// numbers[1] = 2;
// numbers[10] = 3;
// console.log(numbers[4])

// const cars = new Array("volvo", "bmw", "audi");
// const numbers = new Array("volvo");
// const mixedArray = new Array(1, "two", true, null, undefined, { key: "value" },[1, 2, 3,[4, 5]]);

// // console.log(cars)
// // console.log(numbers)
// const output =mixedArray.push("new item");
// console.log(mixedArray)
// console.log(output); // Output: 8 (new length of the array)
// const popot = mixedArray.pop();
// console.log(mixedArray);
// console.log(popot) // Output: [1, "two", true, null, undefined, { key: "value" }, [1, 2, 3, [4, 5]]]

// const returnedValue = fruits.unshift("orange"); // Adds "orange" to the beginning
// console.log(fruits); // Output: ["orange", "apple", "banana", "cherry"]
// console.log(returnedValue); // Output: 4 (new length of the array)

// const removedValue = fruits.shift(); // Removes the first element
// console.log(fruits); // Output: ["apple", "banana", "cherry"]
// console.log(removedValue); // Output: "orange" (the removed element)

// const copyFruits = [...fruits,...numbers]

// console.log(copyFruits); // Output: ["apple", "banana", "cherry"]
// console.log(fruits == copyFruits); 

// const item1 = copyFruits[0]; // "apple"
// const item2 = copyFruits[1]; // "banana"
// const item3 = copyFruits[2]; // "cherry"

// const item4 = copyFruits[3]; // 1
// const item5 = copyFruits[4]; // 2
// const item6 = copyFruits[5]; // 3
// const item7 = copyFruits[6]; // 4
// const item8 = copyFruits[7]; // 5


// const [item1, item2 =9,item3,...rest ] = [1];
// console.log(item1, item2, item3, rest); // Output: apple banana cherry 1 2 3 4 5
// function addTwo(num) {
//   return num + 2;
// }

// function abc() {
 
//     function addThree(num) {
//     return num + 3;
//     }

//     return addThree;
// }
// const newNumbers = numbers.map(addTwo);

// const newNumbers2 = numbers.map((num) => num * 2); // Output: [3, 4, 5, 6, 7]
// const newNumbers3 = numbers.map(function(num) {
//   return num / 2;
// }); // Output: [3, 4, 5, 6, 7]

// console.log(newNumbers); // Output: [3, 4, 5, 6, 7]
// console.log(newNumbers2); // Output: [3, 4, 5, 6, 7]
// console.log(newNumbers3); // Output: [3, 4, 5,

// const flitered = numbers.filter((num) => num > 2); // Output: [3, 4, 5]
// console.log(flitered); // Output: [3, 4, 5]

// const reduced = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Output: 15
// console.log(reduced); // Output: 15

// const found = numbers.find((num) => num > 2); // Output: 3

// //slice
// const spliced = numbers.splice(0); // Output: [2, 3, 4]
// console.log(spliced); // Output: [2, 3, 4]
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

console.log(numbers.length)
console.log(numbers.slice(-12,24))
// console.log(numbers.keys()) // Output: true

console.log(Array.isArray("priyanka") ) ; // Output: true


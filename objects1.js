//nested objects
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    postalCode: "10001",
    //another nested object
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
  hobbies: ["reading", "traveling", "swimming"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const car = {
  brand: "volvo",
  model: "s60",
  model: 123,
  year: 2020,
  start: function () {
    console.log("Car started");
  },
  stop: function () {
    console.log("Car stopped");
  },
};
// Accessing nested object properties
// console.log(person.address.coordinates.latitude); // Output: New York

let person2 = {
  name: "John",
  brand: "manager",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    postalCode: "10001",
    //another nested object
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
  hobbies: ["reading", "traveling", "swimming"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person2.name = "Jane"; // Modifying the name property of person2
// console.log(person2 === person); // Output: true (both variables point to the same object)

// console.log(person.name); // Output: Jane (the change is reflected in both variables)
// console.log(person2.name); // Output: Jane

// person2 = person;
// console.log(person2.name); // Output: Jane
// console.log(person2 === person); // Output: true (both variables point to the same object)
// const arr = [1,2,3,4,5]
// for (let i in person) {
//   console.log(i + " : " + person[i]);
// }

// const map1 = new Map();

// map1.set("a", 1);
// map1.set("b", 2);
// map1.set("c", 3);
// console.log(map1); // Output: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// for (let [...rest] of map1) {
//   console.log(rest);
// }

// for (let i in map1){
//     console.log(i + " : " + map1.get(i));
// }

// const ret = Object.assign({}, person2);

// console.log("car after assign: ", ret === person2
// ); // Output: car object with person properties merged

// ret.address.city = "new brand"; // Modifying the brand property of the new object
// console.log("car after assign: ", ret); // Output: car object with updated brand property
// console.log("car after assign: ", person2); // Output: person2 object remains unchanged

// console.log(Object.keys(person2))

// for (let key in Object.keys(person2)) {
//   console.log(key + " : " + person2[key]);
// }

Object.seal(person2); // Freezes the object, preventing any modifications
person2.name = null;
person2.xyz = "new value"; // This will not change the object as it is frozen
delete person2.age; // This will not delete the age property as the object is frozen

console.log("person2 after freeze: ", person2); // Output: person2 object remains unchanged

const {
  addresses,
  dob = "12/23/23",
} = person2;

person2.address = null;

console.log("address: ", addresses, dob); // Output: { street: '123 Main St', city: 'New York', country: 'USA', postalCode: '10001', coordinates: { latitude: 40.7128, longitude: -74.006 } }

// let car = 'volvo';
// object literal
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
car.color= "red";

// console.log("car: ", car); // Out
// put: volvo

// new Keyword
const car1 = new Object()
car1.brand = "bmw";
car1.model = "x5";
car1.year = 2021;
car1.start = function () {
  console.log("Car started");  
}
console.log("car1 :",car1 instanceof Object); // Output: true


// let car3 = {};
// car3.brand = "audi";
// car3.model = "a4";
// car3.year = 2022;
// car3.start = function () {
//     console.log("Car started");
// };

// car3 = {}
// console.log("car3 :", car3); // Output: {}

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.start = function () {
    console.log("Car started");
  };
}

const car4 = new Car("toyota", "camry", 2023);
const car5 = new Car("honda", "accord", 2024);

console.log("car4 :", car4 instanceof Car); // Output: Car { brand: 'toyota', model: 'camry', year: 2023, start: [Function] }
console.log("car5 :", car5); // Output: Car { brand: 'honda



// const car6 = {
//     "brand type": "mercedes",
//     model: "c-class",
// }
// let model =8908790;
// console.log("car6 :", car6["brand type"]);
// car6[model] = "c-class"; 
// car6.model = "d-class"; // Output: { brand type: 'mercedes', model: 'c-class' }

// console.log("car6 :", car6); // Output: { brand type: 'mercedes', model: 'd-class' }

const car7 ={
    brand: "audi",
    model: "q7",
    year: 2025,
}
let model123 =8908790;

const car8 = {
    brand: "tesla",
    model: "model s",
    year: 2026,
    start: function start() {
        console.log("Car started");
    },
    stop(){
        console.log("Car stopped");
    }
}

console.log("car7 :", car7); // Output: { brand: 'audi', model: 'q7', year: 2025 }
console.log("car8 :", car8); // Output: { brand: 'tesla',
car8.start();

car8.stop()



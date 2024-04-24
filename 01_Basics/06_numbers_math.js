const num = 100
// console.log(typeof num); // It'll give 'number'

const num1 = new Number(200);
// console.log(typeof num1); // It'll give 'object'

const num2 = 400
// console.log(num2.toString()); // It'll convert the numbers into string and than we can use methods related to strings like .length on it
// console.log(num2.toFixed(2)); // It'll reduce the numbers of float value to given value
// It'll be 400.00 for given example

const num3 = 29.08
// console.log(num3.toPrecision(3)); // It'll give the value of first 3 numbers only from givn number
// In given example it'll be 29.1

const num4 = 1000000
// console.log(num4.toLocaleString()); // Bydefault it'll convert the number in string and change the represantation of it according to US standards
// If we want to change it to Indian standards, we can use .toLocaleString("en-IN")


// ------------------------------------ Math --------------------------------------------------

// console.log(Math.abs(-4)); // It'll make the negative into positive but it won't change positive numbers into negative
// console.log(Math.round(9.5)); // It'll give round about value of given number
// for values between .1 to .4, it'll be the previous number
// for values between .5 to .9, it'll be the next number
// console.log(Math.ceil(4.1)); // It'll always give the next number
// console.log(Math.floor(4.9)); // It'll always give the previous number
// console.log(Math.min(7, 3, 9, 6, 10)); // It'll give the minimum number from given numbers
// console.log(Math.max(7, 3, 9, 6, 10)); // It'll give the maximum number from given numbers

console.log(Math.random()); // To get random float number from 0 to 1
console.log((Math.random()*10) + 1); // To get random float number from 1 to 10
console.log(Math.floor((Math.random()*10) + 1)); // To get random integer number from 1 to 10

let min = 20
let max = 40

console.log(Math.floor((Math.random() * (max - min) + 1)) + min); // To get a random number from given minimum and maximum range
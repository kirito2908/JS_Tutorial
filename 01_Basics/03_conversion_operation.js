let score = 2809
// console.log(typeof score); // It's number

let stringifidScore = String(score);
// console.log(typeof stringifidScore); // It's string

let anotherNumber = "Kirito2908"
// console.log(typeof anotherNumber) // It's string

let numified = Number(anotherNumber);
// console.log(typeof numified); // It's Number (Which it shouldn't be)
// console.log(numified); // It'll be NaN (Not a Number - Since That's Not A Number)

let choice = 1;
// console.log(Boolean(choice)); // It's true & 0 will be false

let oneString = "";
// console.log(Boolean(oneString)); // It's false since it's empty 
// If the string's not empty than it'll be true

/* ------------------------- Operations ------------------------- */

let str1 = "Hello ";
let str2 = "Dhruvin";
// console.log(str1 + str2); // Output - Hello Dhruvin

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 3);
// console.log(2 % 3);

// console.log("1" + 2); // Output - 12
// console.log(1 + "2"); // Output - 12
// console.log(1 + 2 + "3"); // Output - 33 (since 1 + 2 is 3 and it'll connect it with string 3)
// console.log("1" + 2 + 3); // Output - 123 (It'll also consider later numbers as string since first one is string)

// console.log(+true); // It'll convert true into number form which is 1
// console.log(+false); // It'll be converted to 0
// console.log(+""); // It'll return 0 for empty string
// console.log(+"Dhruvin"); // It'll return NaN

let gameScore = 10;
let gameScore1 = ++gameScore; // Here it'll first increment value of gameScore and make it 11. After that it'll store that value in gameScore1
let gameScore2 = gameScore1++; // Here it'll first store the value of gameScore1 which is 101 and than it'll increment it. So, gameScore1 will be 12
// console.log(gameScore1); // It's 12
// console.log(gameScore2); // It's 11

// let num = 5;
// let num1 = num++; // num = 6 , num1 = 6
// let num2 = ++num1; // num = 6 , num2 = 7
// let num3 = num2++; // num = 6 , num3 = 6
// console.log(num); // 6
// console.log(num1); // 6
// console.log(num2); // 7
// console.log(num3); // 6
let score = 2809
console.log(typeof score); // It's number

let stringifidScore = String(score);
console.log(typeof stringifidScore); // It's string

let anotherNumber = "Kirito2908"
console.log(typeof anotherNumber) // It's string

let numified = Number(anotherNumber);
console.log(typeof numified); // It's Number (Which it shouldn't be)
console.log(numified); // It'll be NaN (Not a Number - Since That's Not A Number)

let choice = 1;
console.log(Boolean(choice)); // It's true & 0 will be false

let oneString = "";
console.log(Boolean(oneString)); // It's false since it's empty 
// If the string's not empty than it'll be true
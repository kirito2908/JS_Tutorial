// console.log(3 + 3); console.log("Dhruvin"); // Bad Practice

// console.log(3
//     +
//     3);
// console.log("Dhruvin"); // Another Bad Practice (Reduses Code Readability)

// console.log(3 + 3);
// console.log("Dhruvin"); // Correct Practice

// const age = 22;

// Datatypes

/*

Primitive - inbuild datatype
1) number = upto 2^53
2) bigInt = bigger than 2^53
3) string = ""
4) boolean = true / false
5) null = standalone datatype (means the variable is completly empty)
6) undefined = means variable has been defined but the value hasn't been asigned
7) symbol = to give unique trait to a variable

Non-primitive 
8) object

*/

// console.log(typeof age); // Output - number
// console.log(typeof undefined); // Output - undefined
// console.log(typeof null); // Output - object

// let id = Symbol("123");
// let anotherId = Symbol("123");

// Here we're giving same values to both id and anotherId but it'll be considered unique because of Symbol datatype

// console.log(id === anotherId); // It'll be false

// let bigNumber = 5457895920548506707n
// console.log(typeof bigNumber); // It'll be BigInt



/* ------------------------- Stack & Heap ------------------------- */

// Data Related To All Primitive Datatypes Gets Stored In Stack And It Returns Copy Of It's Value When Asked
// let myEmail = "dhruvin@gmail.com";
// let yourEmail = myEmail;

// yourEmail = "dhruvin2908@gmail.com";

// console.log(myEmail); // It'll be the same as it was before - dhruvin@gmail.com
// console.log(yourEmail); // It'll be as we had set it later on - dhruvin2908@gmail.com

// Data Related To All Non-Primitive Datatypes Gets Stored In Heap And It Returns Original Reference Of The Data When Asked

// let obj1 = {
//     email: "dhruvin@gmail.com"
// }
// let obj2 = obj1;

// obj2.email = "dhruvin2908@gmail.com";

// console.log(obj1.email); 
// console.log(obj2.email);
// Both will be changed to dhruvin2908@gmail.com since we changed the original referenced data there
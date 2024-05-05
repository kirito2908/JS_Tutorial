const myObj = {
    username: "Dhruvin",
    email: "dpghevariya27@gmail.com",
    welcomeMSG: function () {
        console.log(`${this.username}, Welcome`); // We use this keyword to access the value in similar context
        // console.log(`${username}, Welcome`); // It'll give an error since it doesn't know what's username
        console.log(this); // We can see in the output that here this contains all data of myObj
    }
}

// myObj.welcomeMSG()
// console.log(this); // Here it's an empty object

// function thisOne () {
//     console.log(this); // in function there are many properties available in this keyword
// }

// const thisOne = function () {
//     console.log(this); // here also the output will be the same
// }

const thisOne = () => { // this is an arrow funtion 
    // console.log(this); // but here this keyword is an empty object 
}

thisOne();

() => {} // arrow function syntax
// we can also store it in a variable like any other functions
const idk = () => {} 

// there 2 kind of functions in it

const addVal = (num1, num2) => {
    return num1 + num2 // this is explicite return method, it's compalsary to use return
}

console.log(addVal(2, 4));

const addVal2 = (num1, num2) => ( num1 + num2 ); // this is implicite return where you don't have to return a value or data and the code inside is in single line

console.log(addVal2(4, 6));

const val3 = () => ( { username: "Dhruvin" } ) // this is how we give objects inside of an implicite function

console.log(val3());
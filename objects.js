// There are 2 ways to define/create Objects

// Object.create // singlton

// Object Literals

const mysym = Symbol("key1");

const myObj = {
    name: "Dhruvin", // Bydefault the type of key will be String
    age: 22, // We can give number as a value
    "full name": "Dhruvin Ghevariya",
    email: "kazutokirigaya2908@gmail.com",
    isLoggedIn: false, // We can give Boolean as a value
    lastLogIn: ["Sunday", "Monday"], // We can give an array as a value
    // mysym: "mykey1" // Instead of this, we use different method to add symbol values
    [mysym]: "mykey1"
    // Similarly, we can also give a function or another object as a value
}

// 2 methods to access values from objects

console.log(myObj.email); // General method most people use but we can't access values like at 2nd index of our given object
console.log(myObj["full name"]); // Proper method to get value from an object
myObj.name = "Kirito";
console.log(myObj.name);
console.log(myObj[mysym]); 

myObj.greetings = function (){
    console.log("This Is Hello From Me");
}

console.log(myObj.greetings()); // We can also create function on object like this

console.log(myObj);

Object.freeze(myObj) // To Freee an object so that the values in it can't be changed

myObj.age = 23

if (myObj.age == 22){
    console.log("See, It's Same As Before.");
}
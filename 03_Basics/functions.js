// functions are used to use the same piece of code more than one time in our code with different values

function myName(){
    console.log("Dhruvin");
}

// myName();
// myName(); // it'll print the same, we don't need to write the same code again

function addNum(num1, num2){ // these are parametrs of a function 
    console.log(num1 + num2);
}

// addNum(2, 4); // these are called arguments for a function
// addNum(2, "4"); // the arguments can be anything. This will be 24 since 4 is in string
// addNum(); // it'll give NaN since it doesn't know what to add
// addNum(2); // still NaN

function mulNum(num1, num2){
    const result = num1 * num2
    return result // it'll give the values back whenever is called and can be stored in variable
    // console.log("My Name"); // this won't be printed since a function stops after return keyword
}

function subNum(num1, num2){
    if (num1 < num2){
        console.log("Please, the second value entered should be less than first");
        return // we can even just add return to stop the function working even while not returning anything
    }
    return num1 - num2 // we can directly return the data as well
}

function divNum(num1 = 2, num2 = 2){ // we can also give default values like this so that if there's no values passed from arguments while call, it'll perform the task using default values
    return num1 / num2
}

// const calc = console.log(divNum());
// const calc1 = console.log(divNum(4, 2)); // these values now overwrite the default values of function

function shoppingCard(val1, val2, ...num1){ // this is rest(...) operator and it's used to store multiple values from arguments in it as a single parameter
    return num1
}

// console.log(shoppingCard(200, 400, 500, 1000)); // here first argument will go to val1, second argument will go to val2 and the rest will be stored as an array together

const myObj = {
    name: "Dhruvin",
    age: 22
}

function objectHandler(anyObject){
    return console.log(`My name is ${anyObject.name} and i'm ${anyObject.age} years old`);
}

objectHandler(myObj);
objectHandler({
    name: "Kirito",
    age: 22
}) // we can also define new object in argument as well

// this is how we can give objects as parameter and access the values of it

// we can do the same with Arrays as well
// singalton object

const user = new Object()

user.name = "Kirito";
user.email = "kazutokirigaya2908@gmail.com";
user.city = "Seoul";
user.ismarried = false;
user.age = 22

// console.log(user);

const newUser = {
    username: {
        fullname: {
            firstName: "Kazuto",
            lastName: "Kirigaya"
        }
    },
    email: {
        primary: "kazutokirigaya2908@gmail.com",
        secondary: "dpghevariya27@gmail.com"
    }
}

// We can create nested objects like this as well

// console.log(newUser.username.fullname.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

const obj3 = Object.assign({}, obj1, obj2) // Here {} in first parameter means that all objects mentioned to be merged and stored in empty {}

// console.log(obj3);
// console.log(obj1); // using {} as first paramete won't change the original object

const obj4 = { 1: "a", 2: "b" }
const obj5 = { 3: "c", 4: "d" }

const obj6 = Object.assign(obj4, obj5);

// console.log(obj6); // Here the output will be same as obj3
// console.log(obj4); // obj4 also will be changed since obj5 is merging with obj4 and it'll then be stored in obj4 itself

// So, this wad the besic difference of using {} as firt parameter of .assign and not using it

// another method to merge 2 or more objects 

const obj7 = { ...obj1, ...obj2 } // using spread operator (...) remoes the {} and directly merges all elements of every objects mentioned
// console.log(obj7);

console.log(Object.keys(user)); // returns array of all keys of an object
console.log(Object.values(user)); // returns array of all values of an object
console.log(Object.entries(user)); // returns an array containing both keys and values as another array inside of it

console.log(user.hasOwnProperty("ismarried")); // return true since the mentioned key exists 
console.log(user.hasOwnProperty("ismarriedTo")); // retrun false since the mentioned key doesn't exists
console.log(newUser.email.hasOwnProperty("primary")); // to know if key exists or not in nested objects
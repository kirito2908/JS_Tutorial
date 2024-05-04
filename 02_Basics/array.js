// Arrays can be defined in 2 ways

const myArr = [0, 1, 2, "Dhruvin", true, 4, 5]; // elements in an array can be of any datatype

const myArr1 = new Array(0, 1, 2, "Kirito", true, 4, 5); // this is defining an array using Array connstructor

// console.log(myArr);
// console.log(myArr1);

// console.log(myArr[3]); // elements in array can be accessed through giving index which starts with 0

// myArr.push(9); // it'll add given element after the last index of the array
// myArr.pop() // it'll remove the last element of the array
// myArr.unshift(9) // it'll push all elements by one and add the given element at the 0th index
// myArr.shift() // it'll remove the 0th index element from the array

// console.log(myArr); 

// const newArr = myArr.slice(1, 4) // it'll take the portion of an array from 1st elements upto 3rd elements (it won't include the 4th element)

// console.log(newArr);
// console.log(myArr); // it'll be the same, slice method doesn't change the original array 

// const newArr1 = myArr.splice(1, 4) // it'll take the portion of an array from the 1st index and upto 4 elements total from the array (that 2nd parameter isn't index)

// console.log(newArr1);
// console.log(myArr); // it'll be changed since splice method has cut the portion of original array
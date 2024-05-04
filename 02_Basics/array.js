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

const k_pop = ["Kim Songsun", "Aoyagi Tsumire", "Guo Jiajia"];
const j_pop = ["fujii kaze", "maiko fujita", "ReoNa"];

// now, we want to merge these 2 arrays

// k_pop.push(j_pop) // this will consider whole array of j_pop as single element and add it after the last index of k_pop as a single element which is quite not as we want 
// console.log(k_pop);
// console.log(k_pop[3][2]); // this is we can access elements of subarrays

// const ultimate_pop = k_pop.concat(j_pop) // this will only take the elements of both arrays and will add them in new array
// console.log(ultimate_pop);
// the downside of .concat is that we can only merge 2 arrays with it

const ultimate_pop = [...k_pop, ...j_pop]; // this is the alternate way to merge arrays and we can add as many arrays we want using , 
// console.log(ultimate_pop);
console.log(Array.of(...j_pop, ...k_pop)); // another method to merge arrays

const array = [1, 2, 3, [4, 5], [6, [7, 8, 9]]]; // there are total 4 arrays here
// to merge all elements of subarrays into single array, we can use .flat method

// console.log(array.flat(Infinity)); // we have to give number of depth as parameter or we can simply give it infinity so that it'll take all subarrays 

// console.log(array.flat(1)); // with 1 depth, only direct subarrays of main array will be merged. In given example the direct subarrays are [4, 5] and [6, [7, 8, 9]]

// console.log(array.flat(2)); // with 2 depth, it'll cover up the subarrays of the subarrays. In given example the array at depth 2 is [7, 8, 9]

console.log(Array.isArray("Dhruvin")); // obviously it's false
console.log(Array.from("Dhruvin")); // it'll convert given arguments into array

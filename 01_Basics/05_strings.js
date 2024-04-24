const name = "Dhruvin";
const age = 22;

// console.log(`My name is ${name} and i'm ${age} years old`);

const str = new String("Dhruvin"); // Another Way To Define A String
// Here if we see in console than we can see that String is in Object form

// console.log(str[0]); // This is how we access different values within a single string

// console.log(str.length); // To get the total length of a string

// console.log(str.toUpperCase()); // Converts the string to Upper Case format
// console.log(str.charAt(4)); // To get a character at given index, It'll be 'v' for this example

// console.log(str.slice(0, 4)); // It returns the characters of string from given range of index

// We can also give negative in range, it'll treat it as String's length - given negative num
// console.log(str.slice(-6, 4)); // str.length = 8 and we've given -6 in range. so, it'll start the range from 8 - 6 = 2
// but since indexing starts with 0 it'll remove one more number in it and will start from index 1 and upto index 4

const newStr = "   Dhruvin   ";
// console.log(newStr.trim()); // It removes extra spaces from before and after of the string

const str1 = "    My   name  is ";
// console.log(str1.split(" ").filter(Boolean).join(" ")); // This method will remove all extra spaces
/* 1) str1.split(" ") - It'll split each and every elements of the string into an Array including all spaces
2) .filter(Boolean) - It'll remove all the empty strings within the Array
3) .join(" ") - It'll concatinate the elements of the Array to each other with space in between and also convert that into an string
If we don't provide " " in .join() method than it'll just concatinate all elements without ant spaces
*/ 

// console.log(newStr.replace("Dhruvin", "Kim SongSun")); // It replaces the first argument given froom the string with the second given string or any other element we give

// console.log(str1.includes("name")); // Returns the boolean response if the given element exist in thee string or now
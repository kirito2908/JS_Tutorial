function greeting () {
    console.log("Welcome User");
}

greeting();

// ()() // syntax of IIFE, in first () we write our funtion's code

( function greetMe () {
    console.log("Welcome Again User");
})();

( () => {
    return console.log("Welcome User Third Time");
} )();

( () => ( console.log("Welcome User Fourth Time") ) )();

( (name) => {
    console.log(`Welcome ${name}`);
} )("Dhruvin");
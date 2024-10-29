
const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];


const printDogName = (dogName) => {
    console.log("The " + dogName + " barks.");
};

// Task 1: Pass the printDogName function into a .forEach call on the `dogs` array, to
// make it print "The {dogName} barks." for each item in the array.
dogs.forEach(printDogName);

// Task 2: Create a new function called `printDogNameUppercase` which works similarly
// to the `printDogName` function but makes the string uppercase. (See https://www.w3schools.com/jsref/jsref_touppercase.asp
// for how to make a string uppercase). Use .forEach to run the function for each
// dog in the dogs array.
const printDogNameUppercase = (dogName) => {
    console.log("The " + dogName.toUpperCase() + " barks."); 
};


dogs.forEach(printDogNameUppercase);

// Task 3: Write a forEach function which uses an anonymous function instead of defining a
// named function like the examples above (hint; the lecture material used anonymous functions)
// and uses console.log to print "The {dogName} needs to go for a walk!".
dogs.forEach(function(dogName) {
    console.log("The " + dogName + " needs to go for a walk!");
});

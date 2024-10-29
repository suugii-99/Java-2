
const dogss = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];


const doggieWalks = dogss.forEach((dogName) => {
    return "The " + dogName + " needs to go for a walk!";
});

// Task 1: Use console.log to log the `doggieWalks` variable below to see what was
// actually returned from .forEach()
console.log("doggieWalks:", doggieWalks); 

// Task 2: Now change .forEach to .map on line 9 and run the code again.
// See the difference? .map() returns the values from the function. The `return`
// in the mapping function is very important. Try removing it to see what happens.
const doggieWalksWithMap = dogss.map((dogName) => {
    return "The " + dogName + " needs to go for a walk!";
});


console.log("doggieWalksWithMap:", doggieWalksWithMap);

// Task 3: Create a new variable called `shoutyDogNames` and assign it to a new
// dogs.map() call. Inside the dogs.map() call, write a function which returns a
// dog's name in uppercase. Finally, log the `shoutyDogNames` variable.
const shoutyDogNames = dogss.map((dogName) => {
    return dogName.toUpperCase();
});


console.log("shoutyDogNames:", shoutyDogNames);

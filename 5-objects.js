// Task 1: Below is a variable called person which has an object assigned to it.
// The object has one property with the key (studentAt) which has a string "Chas" as its
// value. Add two more properties (keys and values) to the object; one called name which
// should store your name as a string, and one called age which should store
// your age as a number.
const person = {
    studentAt: "Chas",
    name: "Your Name", // Replace with your actual name
    age: 25, // Replace with your actual age
    favoriteFoods: ["Pizza", "Sushi", "Chocolate"] // Add your favorite foods
};


console.log(person);

// Task 2: Add a fourth property to the object using the key `favoriteFoods`. Its value
// should be an array of strings with some foods you like.
person.eyeColor = "Blue"; 


console.log(person);

// Task 3: Use the dot notation to print the name and age properties from the person
// object using console.log.
console.log("Name:", person.name);
console.log("Age:", person.age);
// Task 4: You can add a property to an object using the dot notation and using assignment to
// set a its value. Do this to add a new property to the person object with the key `eyeColor`
// and value being a string with the color of your eyes.
const dogsss = {
    labrador: {
        adult: {
            name: "Marley"
        },
        puppy: {
            name: "Buster"
        }
    }
};


console.log("Puppy Name:", dogsss.labrador.puppy.name);

// Task 5: Objects can be nested within other objects. To fetch a value, you must chain
// the dot notation. For example, you could select the entire `adult` object from the
// `dog` object below using the notation `dog.labrador.adult`. Using the dog object below,
// use console.log() to print the name of the puppy (so it should print "Buster").
const products = [
    { name: "Camera", brand: "Canon", model: "EOS 70D" },
    { name: "Camera", brand: "Nikon", model: "D3400" },
    { name: "Camera", brand: "GoPro", model: "Hero 4" },
    { name: "Drone", brand: "DJI", model: "Phantom" },
    { name: "Drone", brand: "GoPro", model: "Karma" }
];


products.forEach(product => {
    console.log(`Product: ${product.name}, Brand: ${product.brand}`);
});




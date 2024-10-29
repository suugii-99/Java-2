
const productss = [
    { name: "Camera", brand: "Canon", model: "EOS 70D" },
    { name: "Camera", brand: "Nikon", model: "D3400" },
    { name: "Camera", brand: "GoPro", model: "Hero 4" },
    { name: "Drone", brand: "DJI", model: "Phantom" },
    { name: "Drone", brand: "GoPro", model: "Karma" }
];

// Task 1: Write a .forEach function which iterates through the products
// and uses console.log() to print the name and brand of each item.
productss.forEach(product => {
    console.log(`Name: ${product.name}, Brand: ${product.brand}`);
});

// Task 2: Use .map() to iterate over the products and return the model from
// each product. Assign the result to a variable called `models` and use console.log()
// to print it.
const models = productss.map(product => product.model);

console.log(models);

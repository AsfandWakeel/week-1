//rest method

function numbers(...num) {
    console.log(num);
}
numbers(10, 20, 30, 40);

//spread method (merge 2 array)

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

//call (call function immediately)

const person = {
    name: "Asfand"
};

function greet(city) {
    console.log("My name is " + this.name + " from " + city);
}

greet.call(person, "Lahore");

//apply (also call function immediately but argument passed as an array)

const person = {
    name: "Ali"
};

function greet(city, country) {
    console.log("My name is " + this.name + " from " + city + ", " + country);
}

greet.apply(person, ["Lahore", "Pakistan"]);

//bind 
const person = {
    name: "Asfand"
};

function greet() {
    console.log("Hello " + this.name);
}

const newFunction = greet.bind(person);

newFunction();

//template literals
const name = "Ali";
const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);
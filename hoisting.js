console.log(a);// undefine error
var a = 10;
console.log(a);//now give value of 10 


// function hoisting
greet();

function greet() {
    console.log("Hello!");
}

// arrow function histing
hello();

var hello = () => {
    console.log("Hello!");
};

// in this the declaration is on top and initilization is not on top
// simple function 
function greet() {
  console.log("Hello Welcome Asfand!");
}

greet();

//function with parameters
function add() {
  let a = 10;
  let b = 20;

  console.log(a + b);
}

add();

//try timeout delays in same upper functions 

// time out delays 1

function greet() {
  console.log("Hello Welcome Asfand!");
}

setTimeout(greet, 3000);

// timeout delays 2

function add() {
  let a = 10;
  let b = 20;

  console.log(a + b);
}

setTimeout(add, 2000);
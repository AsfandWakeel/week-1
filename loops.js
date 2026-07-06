//for loop simple syntax
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//for Each loop
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

//map (to change all elements of array)
const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => num * 2);

console.log(result);

//filter (To keep all elements that match a condition)
const numbers = [1,2,3,4,5,6];

const even = numbers.filter((num) => num % 2 === 0);

console.log(even);

//find( to keep only one element that match a condition)
const numbers = [10,20,30,40];

const result = numbers.find((num) => num > 20);

console.log(result);

//reduce(To combine all array values into one single value like sum, total, average, etc)
const numbers = [10,20,30];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);
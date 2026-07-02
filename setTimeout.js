
let city = "Lahore";
const City = () => {
    console.log(city);
};
setTimeout(City, 3000);

// countdown 

console.log("Countdown Started");

setTimeout(() => {
    console.log("3");
}, 1000);

setTimeout(() => {
    console.log("2");
}, 2000);

setTimeout(() => {
    console.log("1");
}, 3000);

setTimeout(() => {
    console.log("Go!");
}, 4000);
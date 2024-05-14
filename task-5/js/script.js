// Write a JAVASCRIPT Program to calculate the Fibonacci Series of a given number using while loop.

let number = 100;
let x = 0;
let y = 1;

let fibonacciSerise = x + y;

document.getElementById("fn").innerHTML += (`${x} </br>`);

while (fibonacciSerise < number) {
    document.getElementById("fn").innerHTML += (`${fibonacciSerise} </br>`);
    fibonacciSerise = x + y;
    x = y;
    y = fibonacciSerise;
} 
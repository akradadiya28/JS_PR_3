// Write a JAVASCRIPT Program to add all the integers between 0 and 30 and display the total using do while loop.

let num = 30;
document.getElementById("no").innerHTML = (`Number is = ${num}`);

let sum = 0;
let i = 1;

do {
    sum += i;
    i++;
} while (i <= num);

let sumOfN = document.getElementById("sumOfNumbers").innerHTML = (`The sum of Numbers = ${sum}`);

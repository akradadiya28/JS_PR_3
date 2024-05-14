// Write a JAVASCRIPT Program to calculate the factorial of a given number using while loop.

let num = 5;
let i = 1;
let fact = 1;

while (i <= num) {
    fact = fact * i;
    i++;
    document.getElementById("no").innerHTML = (num)
    document.getElementById("facto").innerHTML = (fact)
}

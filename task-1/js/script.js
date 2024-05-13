// Write a JAVASCRIPT Program to display the multiplication table of a given integer using while loop.

let num = 8;
let i = 1;
let mul;

while (i <= 10) {
    mul = num * i;
    let mulT = document.getElementById("table").innerHTML += `${num} * ${i} = ${mul} </br></br>`;
    i++;
}
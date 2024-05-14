// Write a JAVASCRIPT Program that displays 1+4+9+16+....+100 = 385 on one line using for loop.

let i = 1;
let sum = 0;

for (i = 1; i <= 10; i++) {
    document.getElementById("plus").innerHTML += (`</br> ${i} * ${i} = ${i * i} </br>`);
    sum += i * i;
}
document.getElementById("sub").innerHTML += sum;
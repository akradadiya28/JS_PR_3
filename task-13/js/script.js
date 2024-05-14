// Write a JAVASCRIPT Program that displays below pattern using nested for loop:
// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

let i = 1;
let j;
let pattern = " ";
let str = document.getElementById("string");


for (i = 5; i >= 1; i--) {
    for (j = 5; j >= i; j--) {
        pattern += (` ${j}`);
    }
    pattern += "</br>";
}
str.innerHTML = (pattern);
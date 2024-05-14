// Write a JAVASCRIPT Program that displays below pattern using nested for loop:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let i = 1;
let j;
let n = 1;
let str = "";

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        str += (` ${n}`);
        n++;
    }
    str += "</br>";
}


let string = document.getElementById("pattern").innerHTML = (str);
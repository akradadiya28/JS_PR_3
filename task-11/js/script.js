// Write a JAVASCRIPT Program that displays 1-2-3-4-5-6-7-8-9-10 on one line using for loop. There will be no hyphen(-) at starting and ending position.

let i;
let hyphen = "";

for (i = 1; i <= 10; i++) {
    hyphen += i;
    if (i < 10) {
        hyphen += "-";
    }
}
document.getElementById("hyp").innerHTML = hyphen;
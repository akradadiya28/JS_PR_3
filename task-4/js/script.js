// Write a JAVASCRIPT Program to find  the Palindrome number list of a given number using while loop.

let number = 121;
let temp = number;
let palindrome = document.getElementById("palin");
let reverseNumber = 0;

while (temp > 0) {
    let remainder = temp % 10;
    reverseNumber = reverseNumber * 10 + remainder;
    temp = parseInt(temp / 10);
}
if (number == reverseNumber) {
    palindrome.innerHTML = (`${number} is a Palindrome Number.`);
} else {
    palindrome.innerHTML = (`${number} is not a Palindrome Number.`);
}

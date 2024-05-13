// Write a JAVASCRIPT Program to find the Armstrong number list of a given number using while loop.

let number = 407;
let sum = 0;
let temp = number;

while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** 3;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
} else {
    console.log(`${number} is not an Armstrong number`);
}

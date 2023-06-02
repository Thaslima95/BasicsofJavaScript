// to find the sum of positive numbers
// if the user enters negative number, the loop terminates
// negative number is not added to sum
function positive(){
let sum = 0;
let number = 0;

do {
    sum += number;
    number = parseInt(prompt('Enter a number: '));
} while(number >= 0)
return sum


}
let result = positive();
document.getElementById("demo").innerHTML = `The sum is ${result}.`



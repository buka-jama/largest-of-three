// Good Luck! You got this 💪🏾
// Write your code here.
let num1 = 20;
let num2 = 26;
let num3 = 23;


let largestNum;
if (num1 >= num2 && num1 >= num3) {
    largestNum = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largestNum = num2;
} else {
    largestNum = num3;
}


console.log(`The largest number out of the three numbers is X ${largestNum}`);

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Tests for equality and inequality with strings
const string1: string = "apple";
const string2: string = "orange";

console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
const uppercaseString: string = "HELLO";
const lowercaseString: string = "hello";

console.log(uppercaseString.toLowerCase() === lowercaseString); // True

// Numerical tests
const num1: number = 15;
const num2: number = 10;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log(condition1 && condition2); // False
console.log(condition1 || condition2); // True

// Test whether an item is the array or not

const fruits: string[] = ["apple", "orange", "banana", "mango"]

console.log(fruits.includes("Apple")); // False
console.log(fruits.includes("apple")); // True
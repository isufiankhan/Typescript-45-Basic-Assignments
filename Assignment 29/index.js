"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
const favoriteFruits = ['banana', 'apple', 'mango'];
// Check for specific fruits using if statements
if (favoriteFruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favoriteFruits.includes('mango')) {
    console.log("You really like mangoes!");
}
if (favoriteFruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
else {
    console.log("Strawberries are not in your list of favorite fruits.");
}
if (favoriteFruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}
else {
    console.log("Kiwis are not in your list of favorite fruits.");
}

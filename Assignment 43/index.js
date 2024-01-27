"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => magician + " the Great");
    return greatMagicians;
}
function showMagicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const MagicianNames = ["Merlin", "Houdini", "Gandalf", "Dumbledore"];
// Copy of the original array
const copiedMagicianNames = MagicianNames;
// Calling make_great with the copied array to avoid modifying the original
const greatMagicians = make_great(copiedMagicianNames);
// Calling the function to show the original magicians
console.log("Original Magicians:");
showMagicians(MagicianNames);
// Calling the function to show the modified magicians
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

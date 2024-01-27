"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => magician + " the Great");
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
const magicianNames = ["Merlin", "Houdini", "Gandalf", "Dumbledore"];
const greatMagicians = make_great(magicianNames);
//   console.log("Original Magicians:");
//   show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);

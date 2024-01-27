/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let guestNames:string[] = ["Mohsin Iqbal", "Hasan Rana", "Muhammad Ali"];
let absentGuest:string = ("Hasan Rana");
let newGuest:string = "Ahmed Qamar";
guestNames[guestNames.indexOf(absentGuest)] = newGuest;
// console.log(guestNames);
//guestNames.map((items) => console.log(`Dear ${items}, I have found a bigger dinner table.`));
guestNames.unshift("Amin");
//console.log(guestNames);
let middleGuest:string = "Muhammad Usama";
let middleIndex = guestNames.length/2;
guestNames.splice(middleIndex, 0, middleGuest);
//console.log(guestNames);
guestNames.push("Akif Raza");
console.log(guestNames);
guestNames.map((items) => console.log(`${items}, You are invited to the Royal Dinner.`));
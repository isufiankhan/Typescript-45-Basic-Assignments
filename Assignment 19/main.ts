// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestNames:string[] = ["Mohsin Iqbal", "Hasan Rana", "Muhammad Ali"];
let absentGuest:string = ("Hasan Rana");
let newGuest:string = "Ahmed Qamar";
guestNames[guestNames.indexOf(absentGuest)] = newGuest;
guestNames.unshift("Amin");
let middleGuest:string = "Muhammad Usama";
let middleIndex = guestNames.length/2;
guestNames.splice(middleIndex, 0, middleGuest);
guestNames.push("Akif Raza");

console.log(guestNames.length + " " + "peoples" + " " + "are invited to the Royal Dinner.");
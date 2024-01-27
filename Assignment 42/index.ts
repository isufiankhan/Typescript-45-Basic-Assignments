// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magicians: string[]): string[] {
    const greatMagicians = magicians.map(magician => magician + " the Great");
    return greatMagicians;
  }
  
  function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  const magicianNames: string[] = ["Merlin", "Houdini", "Gandalf", "Dumbledore"];
  
  const greatMagicians: string[] = make_great(magicianNames);

//   console.log("Original Magicians:");
//   show_magicians(magicianNames);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicians);
  
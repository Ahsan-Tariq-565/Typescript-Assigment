/*Unchanged Magicians: Start with your work from Excercise 41. Call the function make_great() with a copy of 
the array of magicians name. Because the orginal array will be unchanged, return the new array and store it in a
separate array. Call show_magicians() with each array to show that you have one array of the orginal names and
one array with the Great added to each magicina's name */

let magician: string[] = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Albus Dumbledore",
];

function copyArray(arr: string[]) {
  return [...arr];
}

function make_great(magicianArray: string[]) {
  for (let i = 0; i < magicianArray.length; i++) {
    magicianArray[i] = "The great " + magicianArray[i];
  }
}
function show_magicians(magician: string[]) {
  magician.forEach((element) => {
    console.log(element);
  });
}

const copymagicianArray = copyArray(magician);

make_great(copymagicianArray);

console.log("\n\nThis is my orignal array");
show_magicians(magician);

console.log("\n\nThis is my modified copy of the array:");
show_magicians(copymagicianArray);

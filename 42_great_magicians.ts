/*Great Magicians: Start with a copy of your program from excercise no 42. Write a function called make_great()
that modifies the array of magicinas by adding tha phrase the Great to each magicians's name. Call show_magicians()
to see that the list has actually been modified.*/

let magician: string[] = [
  "Harry Potter",
  "Hermione Granger",
  "Ron Weasley",
  "Albus Dumbledore",
];

function make_great(magicianArray: string[]) {
  for (let i = 0; i < magicianArray.length; i++) {
    magician[i] = "The great " + magicianArray[i];
  }
}

function show_magicians(magician: string[]) {
  magician.forEach((element) => {
    console.log(element);
  });
}

//Now we call function
make_great(magician);
show_magicians(magician);

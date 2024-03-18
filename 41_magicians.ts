/*Magicians: Make a array of magician's names. Pass the array to a function called show_magicians(), which print
the name of each magician in the array*/

let magician: string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

function show_magicians(magician:string[]){
    magician.forEach(element => {
      console.log(element)       
    });                          
}                                

show_magicians(magician);

/*Pizzas: Think of at least three kinds of your favorite pizza. Store these names in a array, and then use a for
loop to print the name of each pizza.*/
/*Modify your for loop to print a sentence using the name of the pizza instead if printing just the of the pizza.
for each pizza you should have one line if output containing a simple statement like "I like pepperoni pizza"*/

/*Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output
should consist of three or more lines about the kinds of pizza you like and then a additional sentence, such as
"I really love piazza!"*/ 

let Pizzas: string[] = ['Pepperoni', 'Cuban', 'BBQ Chicken'];

for(let Pizza of Pizzas){              

    console.log(`I like ${Pizza} pizza`);
}

console.log('I really love pizza')
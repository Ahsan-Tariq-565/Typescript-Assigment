/* T-shirt: write a function called make_shirt() accepts a size and the text of a message that should be printed on
the shirt. The function should print a sentence summarizing ths size of the shirt and the message printed on it.*/

//Making the function.

function make_shirt(size:string, text:string){
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}

// Now calling the function.

make_shirt('large' , 'Hello world');
make_shirt('medium', 'Hello world');
make_shirt('small', 'Hello world');



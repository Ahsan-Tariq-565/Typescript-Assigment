/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique
username.*/
//Make a list of five or more username called current_users.

/*Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
current_users list.*/

/*Loop through the new_users list of to see if each new username has already been used. if it has, print a message that
the person will need to enter a new username. If a username has not been used, Print a message saying that the 
username is aviable*/

//Make sure your comparsion is case insensitive. If "John" has been used, "JHON" should not be accepted.

let current_users: string[] = ['AhsAn', 'AdEel', 'Aamir', 'FaraZ', 'John']; 

let new_users: string[] = ['Hamza', 'AhsAn', 'Ansar', 'FaraZ', 'Ubaid'];

new_users.forEach(newuserName => {                   
    let lowerCase: string = newuserName.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
    console.log(`The username ${newuserName} is not available. Please write a different username`);
}    
else{
    console.log(`The username ${newuserName} is available`);
}
})
//No Users: Add an "if" test to excercise 30 to make sure the list of users is not empty.
// if the list is empty, print the message we need to find some users!
// Remove all of the usernames form your array, and make sure the correct message is print.

let userNames: string[]= ['admin', 'adeel', 'aamir', 'faraz', 'ubaid'];

if(userNames.length === 0){                    
    console.log('we need to find some users!');
}
else{
    userNames = [];                             
    console.log('All user Names have been removed. ' + userNames.length);
}
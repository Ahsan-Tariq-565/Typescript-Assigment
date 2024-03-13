
let guest_list :string[] = ['Tariq Iqbal', 'Muhammad Saddiq', 'Sonia Baji'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n')
// }

let absent_guest :string = 'Sonia Baji' ;
 let new_guest :string = 'Mariyam Bai' ;
 guest_list[2] = new_guest

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n)


guest_list.unshift('Aamir') ;
guest_list.splice(2, 0, 'Ansar' );
guest_list.push('Faraz');

//Yaha par main nay 6 guest k array ko print karwaya hy..ex 15 say.
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n');
// }

//sorry guest for not inviting.
// console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.\n ');

//Yaha par mainay guest remove kiye hy..
while(guest_list.length > 2){
  let remove_guest =  guest_list.pop();
  // console.log(`Sorry Mr. ${remove_guest}, Your are not invited for dinner.\n `);
}

//Hamaray bachy huay 2 Invited guest.
// for(let i=0; i<guest_list.length; i++){
//   console.log('Dear Mr. ' + guest_list[i] + ',\n\nYour are Still invited. \n\nThank You!\n\n');
// }

//Here i remove the remaining 2 guests.
guest_list.splice(0, 2); 
console.log(guest_list);

//Excercise 19

//Print a message indicating the number of people your are inviting to dinner.

console.log(`Total number of Guest are: ${guest_list.length}`);
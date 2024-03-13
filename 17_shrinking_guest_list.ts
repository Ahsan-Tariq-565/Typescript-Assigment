
let guest_list :string[] = ['Tariq Iqbal', 'Muhammad Saddiq', 'Sonia Baji'];

// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n')
// }

let absent_guest :string = 'Sonia Baji' ;

 let new_guest :string = 'Mariyam Bai' ;

 guest_list[2] = new_guest

// for(let i=0; i<guest_list.length; i++){

//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n')
// } 

 console.log(`Mrs. ${absent_guest} is not coming to the party.`);

 console.log('\nGood News! we find Big Table So we are inviting 3 more guests.\n');

guest_list.unshift('Aamir') ;
guest_list.splice(2, 0, 'Ansar' ) ;
guest_list.push('Faraz') ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n')
}

console.log('\nSorry we can not arrange big table, Only Two peoples will be invited. ');
 
while(guest_list.length > 2){
  let remove_guest =  guest_list.pop()
}
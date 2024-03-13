
let guest_list :string[] = ['Tariq Iqbal', 'Muhammad Saddiq', 'Sonia Baji'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n')
}


let absent_guest :string = 'Sonia Baji' ;

let new_guest :string = 'Mariyam Bai' ;

guest_list[2] = new_guest

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure ro invite you in our party. \n\nThank You!\n\n')
} 

console.log(`Mrs. ${absent_guest} is not coming to the party.`)





//Write a program that creates object containing these items.

//Data type of person object
interface person {
    name : string,
    age : number,
    student : Boolean,
    nationality : string
}

//person object
let person :person = {

    name : 'Ahsan',
    age :  26 ,
    student : true,
    nationality : 'pakistan'
}
//print person
console.log(person);

interface car  {
    maker : string,
    color : string,
    automatic : Boolean,
    horsepower : number
}

//car object
let car :car = {
    maker : 'Honda',
    color : 'blue',
    automatic : true,
    horsepower : 1800
}

//print car
console.log(car);
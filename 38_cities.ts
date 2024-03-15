/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function
should print a simple sentence, such as "karachi is in pakistan". Give the parameter for the country a default value.                                                                                                              
Call your function for three differnet cities, at least one of which is not in the default country.*/ 

function describe_city(city:string, country:string = 'Default Country'){
    console.log(`${city} is in ${country}`);
}

//Now we calling the function which we made above:

describe_city('karachi', 'pakistan');
describe_city('Tokyo', 'Japan');
describe_city('Paris');

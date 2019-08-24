console.log('FUNctions');

// testing 1 2

const fancyFunc = (something) => {
    return something + 'fancy';
}

let output = fancyFunc('Michael is ');
console.log(output);

output = 'something else';

// say my name

let fName= 'Ashley';
let lName= 'Claiborne';
console.log(`${fName} ${lName}`);

fName= 'Andrew';
lName= 'Clawson';
console.log(`${fName} ${lName}`);

fName= 'Angela';
lName= 'Cruz';
console.log(`${fName} ${lName}`);

fName= 'Alistair';
lName= 'Chase';
console.log(`${fName} ${lName}`);

const fullName = (first, last) => {
    return `${first} ${last}`;
}

console.log(fullName('Jane', 'Doe'));

// Nugget Time

const nugs = (animal) => {
    return `${animal} nuggets`;
}

const humaneNugs = (animal) => {
    return animal;
}

const spamNugs = (anything) => {
    return 'spam';
}

console.log(nugs('chicken'));
console.log(nugs('tofu'));

console.log(humaneNugs('chicken'));
console.log(humaneNugs('pig'));

console.log(spamNugs('anything'));
console.log(spamNugs('everything'));

//Print to Dom

const printToDom = (v) => {
    document.getElementById('output').innerHTML += v;
}

// Performance List

let bandNumber = 1;

const takeNumber = (bandName) => {
    printToDom(`<h3>${bandNumber}. ${bandName}</h3>`);
    bandNumber++
}

takeNumber('Galactic Scum');
takeNumber('Underdogs');

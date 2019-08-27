console.log('arrays!');

// Dino Array

const dinosaurs = [
    {
        dinoType: 't-rex',
        description: 'Many teeth.',
    },
    {
        dinoType: 'stegosaurus',
        description: 'Spiky back',
    },
    {
        dinoType: 'velociraptor',
        description: 'Will eat your face',
    }
];

const printArrayToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildDino = () => {
    let domString = '';
    for (let i = 0; i < dinosaurs.length; i++) {
        domString += `<div class="dinosaur">`
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`
        domString += `<p>${dinosaurs[i].description}</p>`
        domString += `</div>`
    };
    printArrayToDom('arraysOutput', domString);
};

buildDino();

// Challenge 1
// Write a function that takes an array and an index and prints out that value

const indexAndPrint = (arr, index) => {
    console.log(arr[index]);
};

const randomArr= [1, 5, 8, 19, 25, 'dog', 'Bundaberg', false]

indexAndPrint(randomArr, 2);

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array

const somePeeps= ['Mandy', 'Janie', 'Tom', 'Ashley'];
const otherPeeps= ['Callan', 'Michael', 'Greg', "Zoe"];

const findGreg = (name) => {
    let counter = 1;
    for (i = 0; i < name.length; i++){
        if (name[i].toLowerCase() === 'greg') {
            console.log("It's Greg!");
        } else if (counter < name.length && name[i].toLowerCase() !== 'greg'){
            counter++;
        } else if (counter = name.length && name[i].toLowerCase() !== 'greg'){
            console.log("no Greg :(");
        };
    };
};

findGreg(somePeeps);
findGreg(otherPeeps);

const findGregBetterSolution = (name) => {
    if (name.includes('Greg')) {
        console.log("It's Greg!");
    } else {
        console.log("no Greg :(")
    };
};

findGregBetterSolution(somePeeps);
findGregBetterSolution(otherPeeps);

// Challenge #3
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.

const isItAPalindrome = (str) => {
 const opposite = str.split('').reverse().join('');

 if (str === opposite){
    return true
 } else {
    return false
 }
};

console.log(isItAPalindrome('cat'));
console.log(isItAPalindrome('racecar'));
console.log(isItAPalindrome('mom'));
console.log(isItAPalindrome('bear'));
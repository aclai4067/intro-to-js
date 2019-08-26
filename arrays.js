console.log('arrays!');

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
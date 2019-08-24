const bouncer = (age) => {
     if (age >= 21) {
        console.log('🍻');
    }else{
       console.log('🥺');
    }
}
bouncer(13);
bouncer(56);

const me = 'martin';
console.log(me.length);

// Strings


// Objects

const myPerson = {
    name: '',
    age: 18,
    status: ''
}

console.log(myPerson.name);
// or console.log(myObject[name]);

// Challenge
// create a function that takes in an employee,
//if the employees firstName starts with an M then add a key=status and value='vip'
//if the employees firstName does not start with an M then add a key=status and value='peasant'

const findEmployeeStatus = (employee) => {
    if(employee.name === undefined || employee.name === null || employee.name === ''){
        let enterName = prompt('enter name');
        employee.name = enterName;
    }
    if(employee.name.charAt(0).toLowerCase() === 'm') {
        employee.status = 'VIP';
    } else {
        employee.status = 'peasant';
    }
    console.log(`${employee.name} is a total ${employee.status}`);
    return employee;
}

findEmployeeStatus(myPerson);


// Arrays
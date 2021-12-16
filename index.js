const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const allEmployees = [];
const { createManagerCard, createInternCard, createEngineerCard } = require('./src/template-html');
const generateHTML = require('./src/create-html');


//add validation if possible
const inputManager = addManagerInfo => {
    console.log('Welcome to the Team Profile Generator! To get started, please answer the following questions to build your team.')
    return inquirer.prompt([ 
        {
            type: 'input',
            message: "What is your Manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is your Manager's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is your Manager's email address?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is your Manager's office number?",
            name: 'officeNumber'
        }
    ])
    .then(addManagerInfo => {
        const { name, id, email, officeNumber } = addManagerInfo;
        const manager = new Manager (name, id, email, officeNumber);

        var addManager = createManagerCard(manager);
        allEmployees.push(addManager);
        console.log(manager);

    })
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "Do you wish to add a new employee (choose their role) or build your team? Use arrow keys to make your selection.",
            name: 'role',
            choices: ['Intern', 'Engineer', 'Build my team']
        },
        {
            type: 'input',
            message: "What is the name of this new employee?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the ID of this new employee?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the email address of this new employee?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What school is this Intern from?",
            name: 'school',
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'input',
            message: "What GitHub username belongs to this Engineer?",
            name: 'github',
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'confirm',
            message: "Would you like to add another employee?",
            name: 'confirmNewEmployee',
            default: false
        }
    ])
    .then (newEmployee => {
        let { name, id, role, email, github, school, confirmNewEmployee} = newEmployee;
        if (role === 'Intern') {
            let employee = new Intern (name, id, email, school);
            var addIntern = createInternCard(employee);
            allEmployees.push(addIntern);
            console.log(employee);
        }
        else if (role === 'Engineer') {
            let employee = new Engineer (name, id, email, github);
            var addEngineer = createEngineerCard(employee);
            allEmployees.push(addEngineer);
            console.log(employee);
        }
        if (confirmNewEmployee) {
            return addEmployee();
        }
        else {
            console.log(allEmployees);
            var html = generateHTML(allEmployees);
            fs.writeFile('MyTeamProfile.html', html, function(err) {
                if (err) {
                    return console.log(err);
                }
                console.log('Success! You have added a new employee to your team!');
            })
        }
    })
}

//Function call
inputManager()
.then(addEmployee);

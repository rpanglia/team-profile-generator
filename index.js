const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/')


const inputManager = addManagerInfo => {
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
        console.log(manager);
    })

}

//Function call
inputManager();

// init();


// inquirer
//     .prompt(
//         questions
//     )
//     .prompt([
//         {
//             type: 'input',
//             message: "Employee name?",
//             name: 'name'
//         },
//     ])
// .then((response) => {
//     console.log(response);
// })



//FIRST: prompt for team managers name, id, email and office number (make function for manager profile)
//THEN option to add engineer or intern or finish builiding team

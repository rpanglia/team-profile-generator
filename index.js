const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



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


//FIRST: prompt for team managers name, id, email and office number (make function for manager profile)
//THEN option to add engineer or intern or finish builiding team

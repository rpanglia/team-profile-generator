const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');



//For Employee: name, id, email, getName(), getId(), getEmail(), getRole()
//For Engineer: name, id, email, getName(), getId(), getEmail(), github [username], getGitHub(), getRole() / Overridden to return 'Engineer'
//For Intern: name, id, email, getName(), getId(), getEmail(), school, getSchool(), getRole()/ Overridden to return 'Intern'
//For Manager: name, id, email, getName(), getId(), getEmail(), officeNumber, getRole()/ Overridden to return 'Manager'

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
    //ex of what it will look like. add id, email, etc
const fs = require('fs');

// const Employee = require('../lib/Employee');
// const Engineer = require('../lib/Engineer');
// const Intern = require('../lib/Intern');
// const Manager = require('../lib/Manager');

const generateHTML = data => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        ${data}
    </body>
    </html>
    `
}

module.exports = generateHTML;

//For Engineer: name, id, email, getName(), getId(), getEmail(), github [username], getGitHub(), getRole() / Overridden to return 'Engineer'
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        super();
        this.github = github;
    }
}


module.exports = Engineer;
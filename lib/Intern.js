//For Intern: name, id, email, getName(), getId(), getEmail(), school, getSchool(), getRole()/ Overridden to return 'Intern'
const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        super();
        this.school = school;
    }
}

module.exports = Intern;
//For Intern: name, id, email, getName(), getId(), getEmail(), school, getSchool(), getRole()/ Overridden to return 'Intern'
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

module.exports = Intern;
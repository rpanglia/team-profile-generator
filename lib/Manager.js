//For Manager: name, id, email, getName(), getId(), getEmail(), officeNumber, getRole()/ Overridden to return 'Manager'
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;
//For Manager: name, id, email, getName(), getId(), getEmail(), officeNumber, getRole()/ Overridden to return 'Manager'
const Employee = require('./Employee');

class Manager extends Manager {
    constructor() {
        super();
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;
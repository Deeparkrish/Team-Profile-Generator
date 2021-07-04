const Character = require('./Character');


class Manager extends Character{

    constructor(name,id,email,officenum)
    {
        super(name,id,email);
        this.officenum =officenum;

    }

}
module.exports = Manager;
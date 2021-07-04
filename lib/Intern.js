const Character = require('./lib/Character');

class Intern extends Character {

    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }
}
module.exports = Intern;
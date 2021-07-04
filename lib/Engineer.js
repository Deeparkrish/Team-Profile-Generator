const Character = require('./lib/Character');

class Engineer extends Character {

    constructor(name,id,email,github){
        super(name,id,email);
        this.github=github;
    }
}
module.exports = Engineer;
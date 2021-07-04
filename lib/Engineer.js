const Character = require('./Character');

class Engineer extends Character {

    constructor(name,id,email,github){
        super(name,id,email);
        this.github=github;
    }
}
module.exports = Engineer;
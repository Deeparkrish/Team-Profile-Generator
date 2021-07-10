const Employee = require('./Employee');
//Class Engineer inheriting the properties of Employee class with an addtional property 'github'
class Engineer extends Employee {

    constructor(name,id,email,github){
        super(name,id,email); // refers to parent property 
        this.github=github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return 'Engineer';
    }

}
module.exports = Engineer;
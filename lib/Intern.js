const Employee = require('./Employee');
//Class Intern inheriting the properties of Employee class with an addtional property 'school'
class Intern extends Employee {

    constructor(name,id,email,school){
        super(name,id,email);
        this.school=school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}
module.exports = Intern;
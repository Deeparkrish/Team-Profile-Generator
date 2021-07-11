const Employee = require('./Employee');

//Class Manager  inheriting the properties of Employee class with an addtional property 'officenumber'
class Manager extends Employee{

    constructor(name,id,email,officeNumber)
    {
        super(name,id,email);
        this.officeNumber =officeNumber;

    }
    getRole(){
       return  'Manager';

    }
    getNumber(){
        return this.officeNumber ;
    }
    // addIntern (){
    //     inquirer.prompt([

    //     ])
    //     const internArr = new Array();
    //     internArr.push(new Intern(iname,id,email,school));   

    // }
    // addEngineer(){
    //     inquirer.prompt([

    //     ])
    //     const engArr = new Array();
    //     internArr.push(new Engineer(ename,id,email,github));   

    // }

}
module.exports = Manager;
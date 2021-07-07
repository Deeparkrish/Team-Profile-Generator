const inquirer = require('inquirer');
const Character = require('./Character');
const Intern = require('./Intern');


class Manager extends Character{

    constructor(name,id,email,officenum)
    {
        super(name,id,email);
        this.officenum =officenum;

    }
    addIntern (){
        inquirer.prompt([

        ])
        const internArr = new Array();
        internArr.push(new Intern(iname,id,email,school));   

    }
    addEngineer(){
        inquirer.prompt([

        ])
        const engArr = new Array();
        internArr.push(new Engineer(ename,id,email,github));   

    }

}
module.exports = Manager;
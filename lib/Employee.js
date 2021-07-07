class Employee {

    constructor(name,id,email){
        this.name =name;
        this.id =id;
        this.email =email;
<<<<<<< HEAD
       
=======

>>>>>>> feature/user-prompt
    }

    getName(){

        return this.name;
    }
    getEmail(){

        return this.email;
    }
    getId(){

        return this.id;
    }
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;
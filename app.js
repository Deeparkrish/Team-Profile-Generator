const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generate = require('./lib/generatehtml');
const Manager = require('./lib/Manager');




function writeTOFile (filenamae ,data)
{


}
// TO DO : Prompt user to input data  and upon successful reponse call generate HTML 
function AddManager(){
    inquirer
      .prompt([
        {
        type: 'text',
        name: 'managerName',
        message: 'Welcome to Teamprofile Generator! Enter the team manager name :',
        validate: userInput => {
                if (userInput) {
                return true;
                } else {
                console.log("Please enter the team manager'sname :");
                return false;
                }
            }
        },
        {
            type: 'text',
            name: 'managerId',
            message: "Enter the team manager's  employee-id :",
            validate: userInput => {
                if (userInput) {
                  return true;
                } else {
                  console.log("Please enter the team manager's employee-id:");
                  return false;
                }
            }

        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "Enter the team manager's email address :",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your e-mail address!');
                  return false;
                }
              },
              validate: answer =>{
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                  return true;
                }
                return "Please enter a valid email address.";
              }
        },
        {
            type: 'text',
            name: 'managerNum',
            message: "Enter the team manager's office number :",
            validate: userInput => {
                if (userInput && (parseInt(userInput))&&(userInput.length === 9)) {
                  return true;
                } else {
                  console.log("Please enter the team manager's number- should be a  valid ph number:");
                  return false;
                }
            }
        
        }


    ])
      .then(({managerName,managerId,managerEmail,managerNum }) => {
        // create manager object 
        this.manager = new Manager(managerName,managerId,managerEmail,managerNum);
        console.log(this.manager);
        // add team member 

        AddTeamMembers();
        
      });
}
function buildTeam (){
  AddManager();
}
buildTeam();
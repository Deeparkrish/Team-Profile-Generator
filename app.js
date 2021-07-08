const fs =require('fs')
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatehtml = require('./lib/generatehtml');
const Manager = require('./lib/Manager');

const team =[];
// create  HTML file 
function writeToFile (fileContent)
{
  // return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        throw(err);
        return;
      }
        else{
          console.log("file created");    
    }
    })
}
// Get  Engineer  information and add to team array 
const  promptEngineer= () =>  {
  return inquirer
  .prompt([
  {
    type: 'text',
    name: 'engName',
    message: "Enter the engineer's name :",
    validate: userInput => {
            if (userInput) {
            return true;
            } else {
            console.log("Please enter the engineer's name :");
            return false;
            }
        }
    },
    {
        type: 'text',
        name: 'engId',
        message: "Enter the engineer's employee-id :",
        validate: userInput => {
            if (userInput) {
              return true;
            } else {
              console.log("Please enter the $engineer's employee-id:");
              return false;
            }
        }

    },
    {
        type: 'text',
        name: 'engEmail',
        message: "Enter the engineer's email address :",
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
      type :'input',
      name :'engGithub',
      message:"Enter the github name",
      validate:githubname => {
        if (githubname) {
          return true;
        } else {
          console.log('Please enter a github name!');
          return false;
        }
      }
    }
  ])
  .then(response =>{    
    return response;
});

};

// get intern data 
const  promptIntern= () =>  {
  return inquirer
  .prompt([
  {
    type: 'text',
    name: 'intName',
    message: "Enter the intern's name :",
    validate: userInput => {
            if (userInput) {
            return true;
            } else {
            console.log("Please enter the intern's name :");
            return false;
            }
        }
    },
    {
        type: 'text',
        name: 'intId',
        message: "Enter the intern's employee-id :",
        validate: userInput => {
            if (userInput) {
              return true;
            } else {
              console.log("Please enter the intern's employee-id:");
              return false;
            }
        }

    },
    {
        type: 'text',
        name: 'intEmail',
        message: "Enter the intern's email address :",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter the intern's e-mail address!");
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
      type :'input',
      name :'intSchool',
      message:"Enter the school name",
      validate:schoolname => {
        if (schoolname) {
          return true;
        } else {
          console.log('Please enter a school name!');
          return false;
        }
      }
    }
  ])
  .then(response =>{    
    return response;
});

};

//Add Engineer or intern
function AddTeamMembers(){
  inquirer
  .prompt(
    {
      type: "list",
      name: "employeeType",
      message: "Please choose an option below to add team members ",
      choices: ["Engineer", "Intern", "I dont want to add anymore members."]
  }
  )
  .then(({ employeeType }) => {
    if(employeeType ==='Engineer')
    {
      
      console.log(`
      =================
      Add an Engineer 
      =================
      `);
      //Get Engineer data 
      promptEngineer()
      .then (response => {
        const engineer = new Engineer (response.engName,response.engId,response.engEmail,response.engGithub);
        team.push(engineer);
        AddTeamMembers();
      });
      
      // const engineer = new Engineer()
    }
    else if (employeeType ==='Intern')
    {
      // add Intern data 
      console.log(`
      =================
      Add an Intern
      =================
      `);
      promptIntern()
      .then (response=>{
        const intern = new Intern (response.intName,response.intId,response.intEmail,response.intSchool);
        team.push(intern);
        AddTeamMembers();
      });
    }
    else 
    {
      console.log(`
      =================
      Generate HTML
      =================
      `);
      console.log(team);
        // generate HTML file 
        const filedata =generatehtml(team);
        writeToFile (filedata);
      


    }
    
  })
}
// Prompt user to input  manager data  
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
        //add he manager object to an  array 
        team.push(this.manager);
       
        // add team member 
        AddTeamMembers();
        
      });
}
const buildTeam = ()=> {
  AddManager();
}
buildTeam();
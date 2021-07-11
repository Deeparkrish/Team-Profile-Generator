//Add dependencies 
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

// Generate a card output format 
function generateCard (employee,empRole){
    let empProperty ="";
    let empValue ;
    //Check the employee's roles based on that assign the unquie proparty  and value to temp variables

    //if role is manager add the unque property, 'officenumber' and its value of to the variable
    if (empRole==="Manager") { 
        empProperty = "Office Number";
        empValue= employee.officeNumber;
    }
        //if role is engineer add the unque property, 'githubname' and its value of to the variable
    if (empRole==="Engineer") {
        empProperty = "Github Name";
        empValue=employee.github;
    }
    
    //if role is intern add the unque property, 'school' and its value of to the variable
    if (empRole==="Intern") {
        empProperty = "School";
        empValue= employee.school;
    }
    //testing purpose 
    console.log ("****** In generate card function: generatehrml.js*******")
    console.log(empRole,empProperty,empValue);
    console.log(employee.getName());
    console.log(employee.getId());
    console.log(employee.getEmail());

    return `
    <div class="card m-2" style="width: 18rem;">
      <div class="card-body bg-primary text-white">
        <h5 class="card-title">${employee.getName()}</h5>
        <h5 class="card-title">${empRole}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
        <li class="list-group-item">${empProperty}: ${empValue}</li>
      </ul>
    </div> `;
}
// Generate a html  data 
function generateEmployee(empArr){
  //for each employee in the team 
    empArr.forEach(employee =>{
        let empRole =employee.getRole(); // Identify his role -  Manager/Intern/engineer 

        // Check if the correct data is passed 
        console.log("***** In generateEmployee function(generatehtml.js): employee details to generate html card *****");
        console.log(employee);
        console.log(empRole)
        const output = generateCard(employee,empRole); // Generate a card layout for every employee
        console.log("************ HTMl Card - generated for the emp data *******")
        console.log(output); 
        return output;
       
        
    })
  }


// Generate HTML output to be written into index.html 
function generateHTML (empArr){

return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team-Profile-Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <!-- Google Fontslink -->
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <!-- Bootstrap-->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="./src/style.css">  
      </head>  
    <body>
    <header class="container-fluid bg-danger mb-3 text-white">
        <h1 class="text-center">My-Team</h1>    
    </header> 
    <main class ="container">
    <div class =" row mb-3 justify-content-center" id ="my-team">
    ${generateEmployee(empArr)} 
    </div>
    </main>
    <footer class="col-12 hero bg-info text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Deepa Krishnan</h3>
    </footer>  
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`;

}
module.exports =generateHTML;
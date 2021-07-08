const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

function generateManagerCard (){
    return`
    

    `;
}

function generateEnigneerCard(){

}
function generateInternCard(){}



function generateHTML (empArr){
const {Manager,Engineer,Intern} =empData;

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
        <h1 class="text-center"><span <i class="fa-strong fa-screen-users"></i></span> My Team</h1>    
    </header> 
    <main class ="container">
    <div class =" row mb-3 justify-content-center">
    //  ${generateManagerCard(Manager)}  
    //  ${generateManagerCard(Engineer)}
    //  ${generateManagerCard(Intern)}
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